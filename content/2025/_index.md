+++
title = "Optimization and Automated Reasoning for Designing Future Space Missions"
extra.tagline = "Dagstuhl-Seminar 25362"
extra.subtitles = ["31. Aug – 03. Sep, 2025"]
extra.buttons = [
    {name="Dagstuhl Page", url="https://www.dagstuhl.de/25362"},
	{name="Schedule", url="https://www.dagstuhl.de/25362/schedule.pdf"}
]
+++

# Motivation 

Early stages of designing complex space missions involve fundamental optimization and reasoning tasks such as selecting and scheduling the bodies that should be encountered, routing a spacecraft across multiple bodies optimally, or strategically placing facilities to support future missions. Many of these problems are still solved by hand, as current missions only contain a few celestial objects. However, with larger and increasingly complex missions, these problems become more relevant. Thus, there is an increasing need to solve space-related optimization, scheduling, and planning problems automatically. Unfortunately, the entry hurdle to these problems is high for someone without a background in celestial mechanics, and, in the contrary direction, modern tools and techniques from optimization and automated reasoning are only barely known to aerospace researchers.

This Dagstuhl Seminar connects researchers from very different fields, namely computer science and aerospace research, and very different institutions, namely academia, industry, and space agencies (ESA, NASA, JAXA). The primary aim is to establish a bridge between these groups, formulate problems and tools in a language accessible to the other community, and enable future joint work. This seminar constructs this bridge from two directions using three topics that emerge in preliminary mission design:

- multi-rendezvous spacecraft trajectory optimization,
- automated constellation design with inter-satellite links,
- future space logistics.

The first part of the bridge consists of developing formal definitions of these problems accessible to researchers without a background in celestial mechanics. These definitions allow computer scientists from many domains to apply their tools and expertise to these challenging problems during (and after) the seminar.

The second part of the bridge is constructed from the computer science shore: Three methods from optimization and automated reasoning naturally fit, in the same order, to the three aforementioned space problems:

- maximum satisfaction,
- model counting,
- constraint programming.

These techniques are little or not known to aerospace researchers – at least not the latest advances within these fields. The second aim of this seminar is to create awareness within the aerospace community for these methods and to enrich the toolbox available to preliminary mission architects with the latest tools and tricks.

[<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" style="vertical-align: middle; display: inline" width="1.25em" height="1.25em" fill="currentColor"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M317.8 278.9L284.6 296.2C275.2 276.6 259.4 276.3 257.1 276.3C235 276.3 223.9 290.9 223.9 320.1C223.9 343.7 233.1 363.9 257.1 363.9C271.6 363.9 281.7 356.8 287.7 342.6L318.3 358.1C312.1 369.6 292.6 397.1 253.2 397.1C230.6 397.1 179.2 386.8 179.2 320.1C179.2 261.4 222.2 243 251.8 243C282.5 243 304.5 254.9 317.8 278.9zM460.8 278.9L428 296.2C418.5 276.4 402.3 276.3 400.1 276.3C378 276.3 366.9 290.9 366.9 320.1C366.9 343.6 376.1 363.9 400.1 363.9C414.5 363.9 424.7 356.8 430.6 342.6L461.6 358.1C459.5 361.9 440.2 397.1 396.5 397.1C373.8 397.1 322.5 387.2 322.5 320.1C322.5 261.4 365.5 243 395.1 243C425.8 243 447.7 254.9 460.7 278.9zM319.6 72C176.7 72 72 187.1 72 320.1C72 458.5 185.6 568.1 319.6 568.1C449.5 568.1 568 467.2 568 320.1C568 182.2 461.4 72 319.6 72zM320.5 522.8C208 522.8 116.8 429.8 116.8 320C116.8 214.6 202.2 116.7 320.5 116.7C433 116.7 523.3 206.2 523.3 320C523.3 441.7 423.6 522.8 320.5 522.8z"/></svg> Creative Commons BY 4.0](https://creativecommons.org/licenses/by/4.0) <br/>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" style="vertical-align: middle; display: inline" width="1.25em" height="1.25em" fill="currentColor"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M320 112C434.9 112 528 205.1 528 320C528 434.9 434.9 528 320 528C205.1 528 112 434.9 112 320C112 205.1 205.1 112 320 112zM320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576zM269.1 370.9C241 342.8 241 297.2 269.1 269.1C297.2 241 342.8 241 370.9 269.1C380.3 278.5 395.5 278.5 404.8 269.1C414.1 259.7 414.2 244.5 404.8 235.2C357.9 188.3 282 188.3 235.1 235.2C188.2 282.1 188.2 358 235.1 404.9C282 451.8 357.9 451.8 404.8 404.9C414.2 395.5 414.2 380.3 404.8 371C395.4 361.7 380.2 361.6 370.9 371C342.8 399.1 297.2 399.1 269.1 371z"/></svg> Max Bannach, Johannes Klaus Fichte, Dario Izzo, and Inês Lynce

{{ new_block() }}

# Organizers

{{ grid(
    text = [
        ["Max Bannach","European Space Agency"], 
        ["Johannes Klaus Fichte","Linköping University"],
        ["Dario Izzo","European Space Agency"],
        ["Inês Lynce","INESC-ID"],
    ],
    urls = [
        "https://www.esa.int/gsp/ACT/team/max_bannach/",
        "https://liu.se/en/employee/johfi52",
        "https://www.esa.int/gsp/ACT/team/dario_izzo/",
        "http://sat.inesc-id.pt/~ines/",
    ],
    images = [
        "img/organizers/bannach.jpg",
        "img/organizers/fichte.jpg",
        "img/organizers/izzo.png",
		"img/organizers/lynce.png",
    ],
    narrow = true) }}


{{ new_block() }}

# Participants 

- Giacomo Acciarini (University of Surrey - Guildford, GB) [[dblp]](https://dblp.org/pid/273/8458)
- Abdin Adam (CentraleSupélec - Gif sur Yvette, FR) [[dblp]](https://dblp.org/pid/314/4396)
- Carlos Ansotegui (University of Lleida, ES) [[dblp]](https://dblp.org/pid/32/2567)
- Max Bannach (ESA / ESTEC - Noordwijk, NL) [[dblp]](https://dblp.org/pid/168/8786)
- Laurent Beauregard (Telespazio - Darmstadt, DE)
- Thorsten Ehlers (DLR - Hamburg, DE) [[dblp]](https://dblp.org/pid/145/1362)
- Johannes Klaus Fichte (Linköping University, SE) [[dblp]](https://dblp.org/pid/46/7137)
- Harry Holt (ESA / ESTEC - Noordwijk, NL)
- Dario Izzo (ESA / ESTEC - Noordwijk, NL) [[dblp]](https://dblp.org/pid/02/2750)
- Matti Järvisalo (University of Helsinki, FI) [[dblp]](https://dblp.org/pid/69/6999)
- Alfons Laarman (Leiden University, NL) [[dblp]](https://dblp.org/pid/05/7913)
- Alexandra Lassota (TU Eindhoven, NL) [[dblp]](https://dblp.org/pid/230/3744)
- Anna Latour (TU Delft, NL) [[dblp]](https://dblp.org/pid/204/8189)
- Manuel López-Ibáñez (University of Manchester, GB) [[dblp]](https://dblp.org/pid/09/132)
- Robert Luce (Gurobi Optimization - Berlin, DE) [[dblp]](https://dblp.org/pid/97/1406)
- Inês Lynce (INESC-ID - Lisbon, PT) [[dblp]](https://dblp.org/pid/94/3399)
- Robyn Natherson (University of Colorado Boulder, US)
- Naoya Ozaki (JAXA - Sagamihara, JP) [[dblp]](https://dblp.org/pid/24/7267)
- Laurent Perron (Google - Paris, FR) [[dblp]](https://dblp.org/pid/73/4963)
- Yuri Shimane (Georgia Institute of Technology, US)
- Stefan Szeider (TU Wien, AT) [[dblp]](https://dblp.org/pid/s/StefanSzeider)
- Polina Verkhovodova (Georgia Institute of Technology, US)
- Felix Winter (TU Wien, AT) [[dblp]](https://dblp.org/pid/155/2010)
- Chit Hong Yam (ispace - Tokyo, JP) [[dblp]](https://dblp.org/pid/93/8035)
- Zhong Zhang (Tsinghua University - Beijing, CN)

{{ new_block() }}

<div class="two-columns">

<div>

### Classification
- Data Structures and Algorithms
- Discrete Mathematics
- Logic in Computer Science

</div>

<div>

### Keywords

- automated reasoning
- constraint programming
- trajectory optimization
- constellation design
- space logistics

</div>

</div>

{{ new_block() }}

# Impressions from the Event

{{ slideshow(slug="gallery1", urls=[
  "/img/2025/group1.jpg",
  "/img/2025/group3.jpg",
  "/img/2025/hiking.jpeg",
]) }}

