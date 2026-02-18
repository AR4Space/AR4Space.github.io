(function () {
    const canvas = document.getElementById("particles");
    if (!canvas) return;

    let width = 0;
    let height = 0;

    let mouse = { x: 0, y: 0, active: false };

    // Respect reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        canvas.style.display = "none";
        return;
    }

    const ctx = canvas.getContext("2d");
    const header = canvas.parentElement;
    const styles = getComputedStyle(header);

    const fgColor = styles.getPropertyValue("--color-fg").trim() || "#fff";
    const mgColor = styles.getPropertyValue("--color-mg").trim() || fgColor;
    const farColor = styles.getPropertyValue("--color-far").trim() || fgColor;

    const PARTICLE_COUNT =
        parseInt(styles.getPropertyValue("--particles-count")) || 140;

    const MOUSE_RADIUS =
        parseFloat(styles.getPropertyValue("--particles-radius")) || 120;

    const MOUSE_FORCE =
        parseFloat(styles.getPropertyValue("--particles-force")) || 0.05;

    const VELOCITY_DECAY =
        parseFloat(styles.getPropertyValue("--particles-decay")) || 0.02;

    const SYMBOLS = ["∃", "∀", "φ", "𝛙", "⊨", "⊢", "⌐"];
    const SYMBOL_COUNT = 6;

    let layers = [];

    function resize() {
        const dpr = window.devicePixelRatio || 1;
        const rect = header.getBoundingClientRect();

        width = window.innerWidth;
        height = rect.height;

        canvas.width = width * dpr;
        canvas.height = height * dpr;
        canvas.style.width = width + "px";
        canvas.style.height = height + "px";

        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        createLayers();
    }

    header.addEventListener("mousemove", e => {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
        mouse.active = true;
    });

    header.addEventListener("mouseleave", () => {
        mouse.active = false;
    });

    function createLayer(count, speed, radiusScale, alpha, withSymbols = false) {
        const particles = Array.from({ length: count }, () => {
            const vx = (Math.random() - 0.5) * speed;
            const vy = (Math.random() - 0.5) * speed;

            return {
                x: Math.random() * width,
                y: Math.random() * height,
                r: Math.random() * 2 * radiusScale + 0.5,
                vx,
                vy,
                baseVx: vx,
                baseVy: vy,
                highlighted: false,
                symbol: null
            };
        });

        if (withSymbols) {
            for (let i = 0; i < SYMBOL_COUNT; i++) {
                particles[i].symbol =
                    SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];
            }
        }

        return { alpha, particles };
    }

    function createLayers() {
        layers = [
            // far layer
            createLayer(
                Math.floor(PARTICLE_COUNT * 0.4),
                0.15,
                0.8,
                0.25,
                true
            ),
            // near layer (symbols live here)
            createLayer(
                PARTICLE_COUNT,
                0.3,
                1,
                0.5,
                false
            )
        ];
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        layers.forEach((layer, layerIndex) => {
            ctx.globalAlpha = layer.alpha;

            const radius = MOUSE_RADIUS * (layerIndex === 0 ? 0.7 : 1);
            const force = MOUSE_FORCE * (layerIndex === 0 ? 0.4 : 1);
            const baseColor = layerIndex === 0 ? farColor : fgColor;

            layer.particles.forEach(p => {
                p.highlighted = false;

                p.x += p.vx;
                p.y += p.vy;

                if (mouse.active) {
                    const dx = mouse.x - p.x;
                    const dy = mouse.y - p.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < radius && dist > 0.1) {
                        const f = (1 - dist / radius) * force;
                        p.vx += (dx / dist) * f;
                        p.vy += (dy / dist) * f;

                        if (layerIndex === 1) p.highlighted = true;
                    }
                }

                p.vx += (p.baseVx - p.vx) * VELOCITY_DECAY;
                p.vy += (p.baseVy - p.vy) * VELOCITY_DECAY;

                if (p.x < 0 || p.x > width) {
                    p.vx *= -1;
                    p.baseVx *= -1;
                }

                if (p.y < 0 || p.y > height) {
                    p.vy *= -1;
                    p.baseVy *= -1;
                }

                const color = p.highlighted ? mgColor : baseColor;
                ctx.fillStyle = color;

                if (p.symbol) {
                    ctx.font = "16px system-ui, serif";
                    ctx.textAlign = "center";
                    ctx.textBaseline = "middle";
                    ctx.fillText(p.symbol, p.x, p.y);
                } else {
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                    ctx.fill();
                }
            });

            // constellation only for normal near particles
            if (layerIndex === 1) {
                const ps = layer.particles.filter(p => !p.symbol);
                ctx.lineWidth = 1;

                for (let i = 0; i < ps.length; i++) {
                    for (let j = i + 1; j < ps.length; j++) {
                        const dx = ps[i].x - ps[j].x;
                        const dy = ps[i].y - ps[j].y;
                        const dist = Math.sqrt(dx * dx + dy * dy);

                        if (dist < MOUSE_RADIUS) {
                            ctx.strokeStyle =
                                ps[i].highlighted && ps[j].highlighted
                                    ? mgColor
                                    : fgColor;

                            ctx.globalAlpha =
                                layer.alpha * (1 - dist / MOUSE_RADIUS);

                            ctx.beginPath();
                            ctx.moveTo(ps[i].x, ps[i].y);
                            ctx.lineTo(ps[j].x, ps[j].y);
                            ctx.stroke();
                        }
                    }
                }
            }
        });

        ctx.globalAlpha = 1;
        requestAnimationFrame(animate);
    }

    window.addEventListener("resize", resize);

    resize();
    animate();
})();
