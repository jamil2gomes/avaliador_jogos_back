'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Jogos', [

      {
        nome: "123 Autismo",
        sinopse: "O aplicativo usa as premissas do ensino estruturado com o objetivo de auxiliar no processo de aprendizagem de crianças com autismo por meio de divertidas atividades. Disponível em 5 idiomas, com quatro níveis de dificuldade e 40 fases interativas.",
        data_lancamento: "2021-08-31",
        desenvolvedora: "Dokye Mobile",
        imagem_url: "https://play-lh.googleusercontent.com/GqZ_KaZAKda99FBmb6WOQ2VocP4Hb-UUxEVIYZOJ7MfKWk9oY8Ly5cKBhlbK1QbTW-8=s180-rw",
        usuario_id: 1,
        status: "APROVADO",
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        nome: "Puzzles educativos para miúdo",
        sinopse: "ImagiRation desenvolveu uma abordagem única sobre o crescimento das capacidades de aprendizagem e competências cognitivas de uma criança.",
        data_lancamento: "2019-03-11",
        desenvolvedora: "ImagiRation LLC",
        imagem_url: "https://play-lh.googleusercontent.com/l8w-CRjEMIYM70ey-zA7PwcuuQcFq-4_ZIj37i3joo9rv9V6yqG72TXQefRPt7sIZQ=s180-rw",
        usuario_id: 1,
        status: "APROVADO",
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        nome: "Matraquinha: Autismo",
        sinopse: "Matraquinha é um aplicativo de comunicação alternativa para ajudar pessoas com autismo (TEA) a transmitirem seus desejos, emoções e necessidades. O funcionamento é feito através de cartões e que, ao serem clicados, fazem com que uma voz reproduza o que elas desejam transmitir.",
        data_lancamento: "2019-03-11",
        desenvolvedora: "Ymt4",
        imagem_url: "https://play-lh.googleusercontent.com/txWC_NuXAMjiiqc5vPkDOf3SGTFb-743Js3bUcU6Z3yr0Vsad_CUC9yA00U2s4U-sZo=s180-rw",
        usuario_id: 1,
        status: "APROVADO",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: "Contando o Autismo 123",
        sinopse: "Um jogo de aprendizado de números para iniciantes para crianças com atrasos no desenvolvimento (especialmente transtorno do espectro do autismo) e crianças pequenas. Um jogo totalmente gratuito que trabalha conceitos básicos de números. Feito para crianças com dificuldade de aprendizagem, especialmente para crianças autistas.",
        desenvolvedora: "Worldwide Waypoints, LLC",
        imagem_url: "https://play-lh.googleusercontent.com/M0Xr6MqAvNAlVtNfkhNxoj4AAUeGZNhpwVke4wcju7s5N8Kav5052o3JEewArUTMliuG=s180-rw",
        usuario_id: 1,
        status: "APROVADO",
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        nome: "AutiSpark: Autistas Jogos",
        sinopse: "AutiSpark é um app educacional único para crianças com Transtorno do Espectro do Autismo (TEA) com jogos de aprendizagem especialmente concebidos e aprovados por especialistas. Se você está se esforçando para ensinar conceitos básicos ao seu filho, o AutiSpark é perfeito para você.",
        desenvolvedora: "IDZ Digital Private LTD",
        imagem_url: "https://play-lh.googleusercontent.com/M0Xr6MqAvNAlVtNfkhNxoj4AAUeGZNhpwVke4wcju7s5N8Kav5052o3JEewArUTMliuG=s180-rw",
        usuario_id: 1,
        status: "APROVADO",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: "Jade Autism",
        sinopse: "O Jade Autism é um jogo para crianças com autismo, atraso no desenvolvimento ou dificuldades de aprendizagem. Nosso app foi planejado para estimular a aprendizagem e o desenvolvimento cognitivo dos jogadores, tudo de acordo com técnicas baseadas em evidências científicas.",
        desenvolvedora: "Jade Autism",
        imagem_url: "https://play-lh.googleusercontent.com/4XqDLlbHYvGRevS2GygWrbn39jK-RwdEUy6F56ap4OQDkARiNzEa9fDvbUdG_9S_RIJh=s180-rw",
        usuario_id: 1,
        status: "APROVADO",
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        nome: "Aprendendo com Biel e seus Amigos",
        sinopse: "Jogo desenvolvido para crianças com autismo e com outros atrasos no desenvolvimento, com capacidade cognitiva de 2 a 8 anos de idade. Cada detalhe do jogo teve o acompanhamento de uma equipe multidisciplinar formada por psicopedagogo, fonoaudiólogo, terapeuta ocupacional, psicólogo e pais de uma criança com autismo, o Biel",
        desenvolvedora: "Aprendendo com Biel e seus Amigos",
        imagem_url: "https://play-lh.googleusercontent.com/SYd5I-RiqRxZAzFz31zWThDtFg8Os-Xl-5Ufy8rUZ65jh_pE823Im8_obj5erKD8UQ=s180-rw",
        usuario_id: 1,
        status: "APROVADO",
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        nome: "Leeloo AAC",
        sinopse: "Leeloo é um aplicativo que ajuda crianças não verbais a se comunicarem com seus pais, professores e amigos. Leeloo é desenvolvido com os princípios AAC (Augmentative and Alternative Communication) e PECS (Picture Exchange Communication System). Que são técnicas fortes para o tratamento do autismo e terapia do autismo na comunicação.",
        desenvolvedora: "Dream Oriented",
        imagem_url: "https://play-lh.googleusercontent.com/xFMZ1c6KQUC8Eb3MrLsw1IrZiR8tULBF28ULlf61nWDYnrj5C6ws5cU-MgqlAHkDsZg=s180-rw",
        usuario_id: 1,
        status: "APROVADO",
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        nome: "AutApp - Autismo",
        sinopse: "O AutApp é um aplicativo móvel com atividades que buscam auxiliar a criança autista de uma maneira divertida. Este projeto é referente ao TCC do aluno Gabriel Hahn Schaeffer do curso de Engenharia da Computação, que em 2017 buscou estudar o autismo e com feedbacks de profissionais de psicologia e pedagogia, iniciou o desenvolvimento do projeto.",
        desenvolvedora: "Gabriel Hahn Schaeffer",
        imagem_url: "https://play-lh.googleusercontent.com/VR-rwp0HNFuZed_5uS1pqtji94YOsX_0m0Rwm6300tDX8HAr2ItjVm7_1hXDb0be7A=s180-rw",
        usuario_id: 1,
        status: "APROVADO",
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        nome: "AutApp - Autismo",
        sinopse: "O AutApp é um aplicativo móvel com atividades que buscam auxiliar a criança autista de uma maneira divertida. Este projeto é referente ao TCC do aluno Gabriel Hahn Schaeffer do curso de Engenharia da Computação, que em 2017 buscou estudar o autismo e com feedbacks de profissionais de psicologia e pedagogia, iniciou o desenvolvimento do projeto.",
        desenvolvedora: "Gabriel Hahn Schaeffer",
        imagem_url: "https://play-lh.googleusercontent.com/VR-rwp0HNFuZed_5uS1pqtji94YOsX_0m0Rwm6300tDX8HAr2ItjVm7_1hXDb0be7A=s180-rw",
        usuario_id: 1,
        status: "APROVADO",
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        nome: "PictoTEA",
        sinopse: "O aplicativo busca usar a tecnologia para a inclusão de pessoas com ASD.",
        desenvolvedora: "Velociteam",
        imagem_url: "https://play-lh.googleusercontent.com/nMkH7JqJ46XU1hYuAEBKniiXfG7xlvc2DTmUyfdbxdWagG_CQyrgsF_oLSazvyOVwnE=s180-rw",
        usuario_id: 1,
        status: "APROVADO",
        createdAt: new Date(),
        updatedAt: new Date()
      },


    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Jogos', null, {});
  }
};
