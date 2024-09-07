let dados = [
  {
    titulo: "Pixies",
    descricao: "Banda americana seminal do rock alternativo, conhecida por seu som dissonante e influente, que abriu caminho para o movimento grunge dos anos 90.",
    link: "https://pt.wikipedia.org/wiki/Pixies",
    pontosFortes: ["energia crua", "influência no grunge", "dinâmica sonora"],
    pontosFracos: ["carreira curta", "pouca interação com o público"],
    integrantes: ["Black Francis", "Kim Deal", "Joey Santiago", "David Lovering"],
    pontuacao: {
      presencaDePalco: 7,
      carisma: 6,
      performance: 8,
      tecnica: 9
    },
    tags: ["rock", "alternativo", "grunge", "indie"]
  },
  {
    titulo: "Arcade Fire",
    descricao: "Banda canadense de indie rock, aclamada por seus álbuns conceituais e shows enérgicos, que conquistou o público e a crítica nos anos 2000.",
    link: "https://pt.wikipedia.org/wiki/Arcade_Fire",
    pontosFortes: ["shows épicos", "instrumentação variada", "letras poéticas"],
    pontosFracos: ["álbuns longos", "som por vezes grandioso demais"],
    integrantes: ["Win Butler", "Régine Chassagne", "Richard Reed Parry", "Will Butler"],
    pontuacao: {
      presencaDePalco: 9,
      carisma: 8,
      performance: 9,
      tecnica: 8
    },
    tags: ["indie", "rock", "alternativo", "canadense"]
  },
  {
    titulo: "The Strokes",
    descricao: "Banda americana de rock alternativo que revitalizou o gênero no início dos anos 2000 com seu som garage rock e atitude cool.",
    link: "https://pt.wikipedia.org/wiki/The_Strokes",
    pontosFortes: ["atitude rock'n'roll", "riffs marcantes", "influência na moda"],
    pontosFracos: ["letras simples", "pouca evolução sonora"],
    integrantes: ["Julian Casablancas", "Nick Valensi", "Albert Hammond Jr.", "Nikolai Fraiture", "Fabrizio Moretti"],
    pontuacao: {
      presencaDePalco: 8,
      carisma: 9,
      performance: 7,
      tecnica: 7
    },
    tags: ["rock", "alternativo", "indie", "americana"]
  },
  {
    titulo: "The Smiths",
    descricao: "Banda britânica icônica dos anos 80, liderada por Morrissey e Johnny Marr, que influenciou gerações com suas letras poéticas e melodias melancólicas.",
    link: "https://pt.wikipedia.org/wiki/The_Smiths",
    pontosFortes: ["letras poéticas", "melodias marcantes", "influência duradoura"],
    pontosFracos: ["carreira curta", "relação tumultuada entre integrantes"],
    integrantes: ["Morrissey", "Johnny Marr", "Andy Rourke", "Mike Joyce"],
    pontuacao: {
      presencaDePalco: 7,
      carisma: 8,
      performance: 8,
      tecnica: 9
    },
    tags: ["rock", "alternativo", "indie", "britânica", "britanica"] 
  },
  {
    titulo: "Neutral Milk Hotel",
    descricao: "Projeto musical americano liderado por Jeff Mangum, conhecido por seu álbum 'In the Aeroplane Over the Sea', uma obra-prima do indie folk experimental dos anos 90.",
    link: "https://pt.wikipedia.org/wiki/Neutral_Milk_Hotel",
    pontosFortes: ["originalidade", "letras surrealistas", "instrumentação peculiar"],
    pontosFracos: ["poucos lançamentos", "performances ao vivo raras"],
    integrantes: ["Jeff Mangum", "Julian Koster", "Scott Spillane", "Jeremy Barnes"],
    pontuacao: {
      presencaDePalco: 6,
      carisma: 7,
      performance: 7,
      tecnica: 8
    },
    tags: ["indie", "folk", "experimental", "americana"]
  },
  {
    titulo: "Vampire Weekend",
    descricao: "Banda americana de indie rock que surgiu nos anos 2000 com um som eclético, misturando influências africanas, pop e rock, conquistando o público com suas melodias contagiantes.",
    link: "https://pt.wikipedia.org/wiki/Vampire_Weekend",
    pontosFortes: ["melodias cativantes", "mistura de gêneros", "energia jovial"],
    pontosFracos: ["letras superficiais", "som por vezes repetitivo"],
    integrantes: ["Ezra Koenig", "Rostam Batmanglij", "Chris Baio", "Chris Tomson"],
    pontuacao: {
      presencaDePalco: 8,
      carisma: 8,
      performance: 8,
      tecnica: 7
    },
    tags: ["indie", "rock", "americana"]
  },
  {
    titulo: "Radiohead",
    descricao: "Banda britânica influente, conhecida por sua experimentação sonora e letras introspectivas, que transcendeu o rótulo de rock alternativo.",
    link: "https://pt.wikipedia.org/wiki/Radiohead",
    pontosFortes: ["inovação", "profundidade lírica", "evolução constante"],
    pontosFracos: ["complexidade musical", "pouca acessibilidade"],
    integrantes: ["Thom Yorke", "Jonny Greenwood", "Colin Greenwood", "Ed O'Brien", "Philip Selway"],
    pontuacao: {
      presencaDePalco: 7,
      carisma: 6,
      performance: 9,
      tecnica: 10
    },
    tags: ["rock", "alternativo", "britanica", "britânica"]
  },
  {
    titulo: "The Cure",
    descricao: "Banda britânica de rock alternativo/gótico, liderada por Robert Smith, com uma longa carreira marcada por hits e uma estética sombria única.",
    link: "https://pt.wikipedia.org/wiki/The_Cure",
    pontosFortes: ["estética marcante", "hits atemporais", "carreira longeva"],
    pontosFracos: ["som por vezes datado", "pouca variação sonora"],
    integrantes: ["Robert Smith", "Simon Gallup", "Roger O'Donnell", "Jason Cooper", "Reeves Gabrels"],
    pontuacao: {
      presencaDePalco: 8,
      carisma: 8,
      performance: 7,
      tecnica: 7
    },
    tags: ["rock", "alternativo", "gótico", "britânica", "gotico", "rock alternativo", "britanica"]
  },
  {
    titulo: "Belle and Sebastian",
    descricao: "Banda escocesa de indie pop, conhecida por suas melodias delicadas, letras narrativas e instrumentação rica.",
    link: "https://pt.wikipedia.org/wiki/Belle_and_Sebastian",
    pontosFortes: ["letras inteligentes", "arranjos elaborados", "atmosfera intimista"],
    pontosFracos: ["som calmo demais para alguns", "pouca presença de palco"],
    integrantes: ["Stuart Murdoch", "Stevie Jackson", "Chris Geddes", "Richard Colburn", "Sarah Martin", "Bobby Kildea", "Dave McGowan"],
    pontuacao: {
      presencaDePalco: 6,
      carisma: 7,
      performance: 7,
      tecnica: 8
    },
    tags: ["indie", "pop", "escocesa"]
  },
  {
    titulo: "Nickelback",
    descricao: "Banda canadense de post-grunge, conhecida por seus hits radiofônicos e refrões grudentos, embora frequentemente alvo de críticas.",
    link: "https://pt.wikipedia.org/wiki/Nickelback",
    pontosFortes: ["refrões marcantes", "sucesso comercial", "energia nos shows"],
    pontosFracos: ["letras clichês", "críticas da mídia", "som formulaico"],
    integrantes: ["Chad Kroeger", "Ryan Peake", "Mike Kroeger", "Daniel Adair"],
    pontuacao: {
      presencaDePalco: 8,
      carisma: 7,
      performance: 7,
      tecnica: 6
    },
    tags: ["rock", "canadense"]
  },
  {
    titulo: "Muse",
    descricao: "Banda britânica de rock alternativo/progressivo, conhecida por suas composições ambiciosas, shows teatrais e habilidades instrumentais.",
    link: "https://pt.wikipedia.org/wiki/Muse",
    pontosFortes: ["habilidade técnica", "shows grandiosos", "experimentação sonora"],
    pontosFracos: ["letras pretensiosas", "som por vezes exagerado"],
    integrantes: ["Matthew Bellamy", "Dominic Howard", "Chris Wolstenholme"],
    pontuacao: {
      presencaDePalco: 9,
      carisma: 9,
      performance: 10,
      tecnica: 10
    },
    tags: ["rock", "alternativo", "britânica", "britanica", "progressivo", "rock alternativo", "epico", "teatral"]
  },
  {
    titulo: "The Killers",
    descricao: "Banda americana de indie rock/pop, conhecida por seus hits radiofônicos e shows energéticos, que conquistaram fãs em todo o mundo.",
    link: "https://pt.wikipedia.org/wiki/The_Killers",
    pontosFortes: ["hits cativantes", "energia contagiante", "carisma do vocalista"],
    pontosFracos: ["letras simplistas", "falta de inovação sonora"],
    integrantes: ["Brandon Flowers", "Dave Keuning", "Mark Stoermer", "Ronnie Vannucci Jr."],
    pontuacao: {
      presencaDePalco: 9,
      carisma: 9,
      performance: 8,
      tecnica: 8
    },
    tags: ["indie", "pop", "americana", "rock", "vegas"]
  },
  {
    titulo: "Arctic Monkeys",
    descricao: "Banda britânica de indie rock que conquistou o público com seu som cru e letras inteligentes, tornando-se uma das maiores bandas do século 21.",
    link: "https://pt.wikipedia.org/wiki/Arctic_Monkeys",
    pontosFortes: ["letras inteligentes", "energia ao vivo", "evolução sonora"],
    pontosFracos: ["fama precoce", "pressão da mídia"],
    integrantes: ["Alex Turner", "Jamie Cook", "Nick O'Malley", "Matt Helders"],
    pontuacao: {
      presencaDePalco: 8,
      carisma: 8,
      performance: 9,
      tecnica: 8
    },
    tags: ["indie", "rock", "britânica", "britanica"]
  },
  {
    titulo: "The White Stripes",
    descricao: "Duo americano de rock alternativo, formado por Jack White e Meg White, conhecido por seu som minimalista e atitude garage rock.",
    link: "https://pt.wikipedia.org/wiki/The_White_Stripes",
    pontosFortes: ["simplicidade", "energia crua", "estilo visual marcante"],
    pontosFracos: ["limitação instrumental", "relação conturbada entre membros"],
    integrantes: ["Jack White", "Meg White"],
    pontuacao: {
      presencaDePalco: 8,
      carisma: 9,
      performance: 8,
      tecnica: 7
    },
    tags: ["rock", "alternativo", "americana"]
  },
  {
    titulo: "Linkin Park",
    descricao: "Banda americana de rock alternativo/metal, conhecida por sua mistura de rap e rock, letras emocionais e shows intensos.",
    link: "https://pt.wikipedia.org/wiki/Linkin_Park",
    pontosFortes: ["versatilidade musical", "letras emocionais", "impacto emocional"],
    pontosFracos: ["críticas da mídia", "evolução sonora questionável"],
    integrantes: ["Emily Armstrong", "Mike Shinoda", "Brad Delson", "Dave Farrell", "Rob Bourdon", "Joe Hahn"],
    pontuacao: {
      presencaDePalco: 9,
      carisma: 8,
      performance: 9,
      tecnica: 8
    },
    tags: ["rock", "alternativo", "metal", "americana"]
  },
];
