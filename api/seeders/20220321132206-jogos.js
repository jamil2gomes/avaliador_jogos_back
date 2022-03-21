'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Jogos', [

      {
        nome: "123 Autismo",
        sinopse:"O aplicativo usa as premissas do ensino estruturado com o objetivo de auxiliar no processo de aprendizagem de crianças com autismo por meio de divertidas atividades.",
        data_lancamento: "2021-08-31",
        desenvolvedora:"Dokye Mobile",
        imagem_url:"https://play-lh.googleusercontent.com/GqZ_KaZAKda99FBmb6WOQ2VocP4Hb-UUxEVIYZOJ7MfKWk9oY8Ly5cKBhlbK1QbTW-8=s180-rw",
        usuario_id:1,
        status: "APROVADO",
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        nome: "Puzzles educativos para miúdo",
        sinopse:"ImagiRation desenvolveu uma abordagem única sobre o crescimento das capacidades de aprendizagem e competências cognitivas de uma criança.",
        data_lancamento: "2019-03-11",
        desenvolvedora:"ImagiRation LLC",
        imagem_url:"https://play-lh.googleusercontent.com/l8w-CRjEMIYM70ey-zA7PwcuuQcFq-4_ZIj37i3joo9rv9V6yqG72TXQefRPt7sIZQ=s180-rw",
        usuario_id:1,
        status: "APROVADO",
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        nome: "Matraquinha: Autismo",
        sinopse:"Matraquinha é um aplicativo de comunicação alternativa para ajudar pessoas com autismo (TEA) a transmitirem seus desejos, emoções e necessidades.",
        data_lancamento: "2019-03-11",
        desenvolvedora:"Ymt4",
        imagem_url:"https://play-lh.googleusercontent.com/txWC_NuXAMjiiqc5vPkDOf3SGTFb-743Js3bUcU6Z3yr0Vsad_CUC9yA00U2s4U-sZo=s180-rw",
        usuario_id:1,
        status: "APROVADO",
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        nome: "PictoTEA",
        sinopse:"O aplicativo busca usar a tecnologia para a inclusão de pessoas com ASD.",
        data_lancamento: "2018-03-24",
        desenvolvedora:"Velociteam",
        imagem_url:"https://play-lh.googleusercontent.com/nMkH7JqJ46XU1hYuAEBKniiXfG7xlvc2DTmUyfdbxdWagG_CQyrgsF_oLSazvyOVwnE=s180-rw",
        usuario_id:1,
        status: "APROVADO",
        createdAt: new Date(),
        updatedAt: new Date()
      },
     

    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Jogos', null, {});
  }
};
