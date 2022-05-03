# API REST DO AVALIADOR DE JOGOS - PROJETO TCC

Essa é a parte do back-end do projeto de monografia <a href="https://github.com/jamil2gomes/avaliadorJogo" target="_blank">Aut Games Finder</a> 

## Configurações iniciais
<ul>
  <li>Baixe o projeto ou dê um <code>git clone</code>;</li>
  <li>Com o terminal aberto, no caminho do projeto, execute <code>npm install</code>;</li>
   <li>Vá para a pasta config na raiz do projeto e coloque as informações do seu banco de desenvolvimento no campo <i>"development"</i></li> 
   <li>Para criação da chave secreta pro JWT, no seu terminal execute: <code>node -e "console.log(require('crypto').randomBytes(256).toString('base64'))"</code>;</li>
    <li>Crie um arquivo .env para ser guardado a variavel CHAVE_JWT e cole o resultado do passo anterior;</li>
    <li>Use os comandos do sequelize para fazer as migrations e seeders no banco;</li>
  <li>Execute o comando <code>npm run dev</code>.</li>
</ul>

## Diagrama ER

![Diagrama ER do projeto](https://user-images.githubusercontent.com/24705347/166464626-b29ea866-6391-4f0e-a147-80f7ffb4e0b2.png)

## Sequelize Cli
<p>Como ORM foi utilizado o <a href="https://sequelize.org/" target="_blank">SEQUELIZE</a>.</p>

### Rodar Migration
<p><code>npx sequelize-cli db:migrate</code></p>

### Rodar Seeds
<p><code>npx sequelize-cli db:seed:all</code></p>

## Considerações
<p>Todo o projeto foi feito em um mês (03/2022). E até aquele momento, eu tinha zero experiencia com NodeJS, por isso peço humildemente desculpas se tiver ferido algum padrão arquitetural ou se deixei (e provavelmente deixei) algum ponto relevante passar. Esse código será atualizado a medida que for obtendo mais conhecimento sobre NodeJS e Sequelize.</p>
<p>Até o momento, existem alguns pontos de melhoria a serem feitos (os que sei de cabeça):</p>

<ul>
  <li>Criar um prazo de validade para o token JWT</li>
  <li>Implementar um refresh token</li>
<ul>
