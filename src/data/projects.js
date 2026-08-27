export const projects = [
  {
    id: "moat-antarctica",
    title: "MOAT: Multi-disciplinary Observations of Antarctic ice-shelf Thresholds",
    status: "ongoing",
    role: "Co-PI",
    period: "2024 - 2028", // À ajuster selon le contrat BELSPO
    funding: "BELSPO (Belgian Federal Science Policy Office)",
    institution: "VUB",
    consortium: "ULB, KU Leuven, VUB",
    summary: "Measuring basal and surface melting on the Roi Baudouin Ice Shelf to improve climate and ice sheet models.",
    fullDescription: `Antarctic ice shelves are key to controlling global sea-level rise. Since 1992, global sea level has risen by around 10 cm, and future rise will increasingly depend on how the Antarctic ice sheet responds to climate change. 
    
    Recent Antarctic ice loss is mainly driven by thinning of ice shelves caused by warm ocean waters flowing beneath them, combined with surface melting and fracturing linked to extreme weather and ocean conditions. However, the processes that govern ice shelf weakening and collapse are still poorly quantified.
    
    The MOAT consortium addresses this gap by directly measuring basal melting, surface melting, and ice shelf strength using advanced ground-based sensors, long-term field observations, airborne surveys, and satellite data on the Roi Baudouin Ice Shelf, Antarctica.`,
    tags: ["Antarctica", "Ice Shelves", "BELSPO", "Fieldwork"]
  },  
{
    id: "antarctic-thesis",
    title: "Influence of Small-Scale Processes on the Coupled Atmosphere-Cryosphere-Ocean System in Adélie Land, Antarctica",
    status: "past",
    role: "PhD Candidate",
    period: "2016 - 2021",
    funding: "none",
    institution: "ULiège",
    consortium: "ULiège-UCLouvain",
    summary: "PhD thesis on how small-scale atmosphere-ocean-sea ice-ice sheet processes shape the Antarctic climate, using the MAR regional climate model.",
    fullDescription: `This PhD project investigated how small-scale processes (typical length scales below 100 km) shape the interactions between the ocean, sea ice, ice sheet and atmosphere in Antarctica, focusing on the Adélie Land region.

    Using the regional climate model MAR (Modèle Atmosphérique Régional), the work first assessed the sensitivity of the Antarctic surface mass balance (SMB) to present and future ocean and sea ice conditions, showing that katabatic winds and temperature inversions largely shield the ice sheet from ocean-driven perturbations. Building on this, an ensemble of MAR simulations forced by CMIP5/CMIP6 models projected a contrasting future SMB response: increasing over the grounded ice sheet due to stronger snowfall, but decreasing over the ice shelves due to enhanced meltwater runoff — with a sharp SMB decline projected above +2.5°C of Antarctic warming. A follow-up study identified cloud phase, particularly liquid-containing clouds, as a major driver of uncertainty in future ice shelf melt through the snow-melt-albedo feedback.

    The thesis also used ocean and coupled ocean-sea ice-atmosphere modelling (NEMO-LIM coupled with MAR) to show that ice shelf basal melt is strongly amplified by tides and reshapes dense water formation off Adélie Land, that atmospheric forcing resolution significantly affects coastal polynya activity and sea ice production, and that ocean mesoscale eddies measurably modulate atmosphere-sea ice-ocean heat and momentum exchanges.`,
    tags: ["Antarctica", "MAR", "PhD Thesis", "Coupled Modelling"]
  },
  {
    id: "crices",
    title: "CRICES: Regional NEMO-SI3 Modelling of Freshwater Impacts on Antarctic Sea Ice and Ocean",
    status: "past",
    role: "Postdoc",
    period: "2022 - 2023",
    funding: "H2020 (CRICES)",
    institution: "IGE",
    consortium: "CRICES",
    summary: "Development of a regional NEMO-SI3 configuration around Antarctica to study how ocean freshwater input affects sea ice and ocean circulation.",
    fullDescription: `As part of Work Packages 2 and 3 of the H2020 CRICES project, I developed a regional NEMO-SI3 configuration covering the Antarctic margins to investigate the impact of freshwater fluxes into the Southern Ocean — from ice shelf basal melt and iceberg discharge — on sea ice and ocean properties.

    This work, carried out as a postdoctoral researcher at the Institut des Géosciences de l'Environnement (IGE) in Grenoble, provided a dedicated modelling tool to assess how freshwater forcing reshapes sea ice extent, water mass properties and ocean circulation around Antarctica.`,
    tags: ["Antarctica", "NEMO-SI3", "Sea Ice", "H2020"]
  },
  {
    id: "aiai",
    title: "AIAI: Artificial Intelligence to Improve the Coupling Between the Antarctic Ice Sheet and the Ocean/Atmosphere System",
    subtitle: "Neural network emulators to couple ice sheets, atmosphere and ocean",
    status: "ongoing",
    role: "Co-supervisor",
    period: "2023 - 2027",
    funding: "ANR (Agence Nationale de la Recherche), ANR-22-CE01-0014",
    institution: "ULiège",
    consortium: "IGE, IPSL (LSCE-LOCEAN), ULiège, VUB",
    website: "https://anr-aiai.github.io/",
    relatedDOIs: ["10.5194/gmd-19-7979-2026"],
    summary: "Neural network emulators coupling the Antarctic ice sheet to the global atmosphere and ocean, to reduce uncertainty in Antarctica's contribution to sea level rise.",
    fullDescription: `AIAI (2023–2027) aims to improve the integration of ice sheets into Earth System Models through neural network emulators at the interfaces between the Antarctic ice sheet and the global atmosphere, and between the Antarctic ice sheet and the global ocean.

    The project develops convolutional neural networks (U-Net) trained on high-resolution, polar-oriented regional models — the MAR atmospheric model (surface mass balance) and the NEMO-SI3 ocean model (ice-shelf basal melt) — to emulate their behaviour within the coarser-resolution IPSL-CM6 climate model, coupled to the Elmer/Ice ice-sheet model. The goal is to reduce uncertainty in projections of the Antarctic contribution to sea level rise by better capturing the two opposing drivers of ice mass change: increased surface accumulation/melt and increased ocean-driven dynamical mass loss.

    At ULiège, I supervise Achille Gelens, a research engineer based at LSCE, who is developing the neural network emulator of the MAR atmospheric model. I also contribute to discussions on the ocean (NEMO-SI3) emulator and its integration into the IPSL climate model.

    This work was supported by the French National Research Agency through the AIAI project (ANR-22-CE01-0014). It is also directly connected to my FNRS postdoctoral project — a link between the two will be added here once that project page is online.`,
    tags: ["Antarctica", "Machine Learning", "Ice Sheet-Ocean Coupling", "ANR"]
  }
];
