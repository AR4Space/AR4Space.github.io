+++
+++

# Invited Speakers

## Supply Chain Attacks: If the Weakest Link Breaks the Chain

{% keynote(
  name="Sebastian Berndt", 
  url="https://seberndt.github.io/",
  affiliation="TH Lübeck",
  img="/img/speakers/berndt.jpg"
) %}
Modern computer systems consist of a large number of components that are developed by third parties and later integrated into the larger system. This reliance on externally developed modules creates a significant risk of supply chain attacks, in which some of the components are intentionally manipulated to disrupt or compromise the functionality of the overall system. A related challenge arises in federated learning, where individual participants may provide manipulated or malicious training data in order to influence the resulting model. In this talk, we first provide an overview of the risks posed by such attacks. We then present several countermeasures developed for security-critical cryptographic systems that leverage formal verification techniques to ensure robustness even in the presence of potentially compromised components. Finally, we discuss how these approaches can be adapted and applied to space systems, where reliability and security are particularly critical.
{% end %}

{{ new_block() }}

## Global Trajectory Optimization Competition (GTOC): The Case of GTOC12 

{% keynote(
  name="Zhong Zhang", 
  url="https://scholar.google.com/citations?user=wlcMo8sAAAAJ&hl=en",
  affiliation="Politecnico di Milano",
  img="/img/speakers/zhang.webp"
) %}
The Global Trajectory Optimization Competition (GTOC) is an international challenge in space mission design that formulates realistic, large-scale optimization problems and evaluates solutions through transparent mathematical scoring rules. This talk presents the structure and philosophy of GTOC using the 12th edition (GTOC12) as a case study. GTOC12 focused on asteroid mining, with the objective of maximizing the total mass of resources returned to Earth. Participants were required to design trajectories for multiple spacecraft performing asteroid rendezvous, resource extraction, and return missions under low-thrust propulsion constraints. The problem combined continuous optimal control with discrete combinatorial decision-making, including spacecraft allocation, target selection, sequencing, and timing. GTOC12 illustrates how future mission design integrates astrodynamics, optimization, and systems-level planning.
{% end %}

{{ new_block() }}

## Title TBA

{% keynote(
  name="Caterina Urban", 
  url="https://caterinaurban.github.io/",
  affiliation="INRIA"
) %}
The abstract will be announced soon.
{% end %}

{{ new_block() }}

## From Requirements to the Verification of Stochastic Systems

{% keynote(
  name="Gricel Vázquez", 
  url="https://gricel-lee.github.io/",
  affiliation="University of York",
  img="/img/speakers/vazquez.jpeg"
) %}
Complex space systems, such as those deployed in orbital or deep-space
  environments, are increasingly reliant on the seamless integration
  of heterogeneous components operating in harsh, unpredictable
  conditions. While the necessary system requirements are usually
  extracted from multiple stakeholders, norms, and regulations in
  natural language, this approach often leads to dangerous
  ambiguities. Formal languages offer a rigorous means of expressing
  these requirements unambiguously, while enabling the detection of
  **realizability** issues and inconsistencies. In uncertain environments
  such as in space, stochastic modeling of subsystems is preferred to
  reason about the probability of a requirement holding or to estimate
  expected operational costs. In this talk, I present two tools for
  addressing these challenges: NASA’s **FRET** for eliciting deterministic
  and probabilistic requirements from structured natural language, and
  **ULTIMATE** for verifying stochastic world-models. We will end with a
  discussion on how these tools can be applied to complex space
  systems to bridge the gap between high-level requirements and
  rigorous, automated formal system verification. 
{% end %}
