<p align="center">
   <img width="500px" src="https://user-images.githubusercontent.com/54639269/89223832-dd796380-d5ad-11ea-9a39-fc852538ca13.png" alt="Proffy" width="280"/>
</p>

<p align="center">
    Projeto feito para conectar professores e estudantes, feito na Next Level Week #2 @Rocketseat
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Typescript-v3.9.7-blue" />
  <img src="https://img.shields.io/badge/NodeJs-v12.16.2-green" />
  <img src="https://img.shields.io/badge/Express-v4.17.1-lightgrey" />
  <img src="https://img.shields.io/badge/SQLite3-v5.0.0-blue" />
  <img src="https://img.shields.io/badge/Knex-v0.21.2-orange" />
  <img src="https://img.shields.io/badge/React-v16.13.1-lightblue" />
  <img src="https://img.shields.io/badge/React Native-sdk38.0.2-lightblue" />
  <img src="https://img.shields.io/badge/Expo-v38.0.9-lightgrey" />
</p>

## Tabela de Conteúdo

- [Tabela de Conteúdo](#tabela-de-conte%C3%BAdo)
- [Sobre o Projeto](#sobre-o-projeto)
  - [Feito Com](#feito-com)
- [Começando](#come%C3%A7ando)
  - [Pré-requisitos](#pr%C3%A9-requisitos)
  - [Instalação](#instala%C3%A7%C3%A3o)
  - [Rode a API](#rode-a-api)
  - [Rode o projeto Web](#rode-o-projeto-web)
  - [Rode o projeto Mobile](#rode-o-projeto-mobile)
- [Contribuição](#contribui%C3%A7%C3%A3o)
- [Contato](#contato)

## Sobre o Projeto
<p align="center">
  <img alt="design do projeto" width="650px" src="https://raw.githubusercontent.com/HigorSnt/proffy/master/.github/design.png" />
<p>
  
A proposta do projeto é uma aplicação que possa ligar quem deseja aprender, com quer ensinar. É possível encontrar alunos para o que você leciona, ou encontrar o professor para aquela matéria que você sempre quis aprender mais! Sem que haja nenhuma limitação de área!! 

### Feito Com

Abaixo segue o que foi utilizado na criação deste projeto:

- [Visual Studio Code](https://code.visualstudio.com/) - O Visual Studio Code é um editor de código-fonte desenvolvido pela Microsoft para Windows, Linux e macOS. Ele inclui suporte para depuração, controle Git incorporado, realce de sintaxe, complementação inteligente de código, snippets e refatoração de código.

- [Typescript](https://www.typescriptlang.org/) - TypeScript é um superconjunto de JavaScript desenvolvido pela Microsoft que adiciona tipagem e alguns outros recursos a linguagem. Anders Hejlsberg, arquiteto da linguagem C# e criador das linguagens Delphi e Turbo Pascal, trabalhou no desenvolvimento do TypeScript.

- [Node.js](https://nodejs.org/en/) - Node.js é um interpretador de JavaScript assíncrono com código aberto orientado a eventos, criado por Ryan Dahl em 2009, focado em migrar a programação do Javascript do cliente (frontend) para os servidores, criando aplicações de alta escalabilidade (como um servidor web), manipulando milhares de conexões/eventos simultâneas em tempo real numa única máquina física.

- [Express](https://expressjs.com/pt-br/) - O Express.js, ou simplesmente o Express, é uma estrutura de aplicativo da Web para o Node.js, lançada como software livre e de código aberto sob a Licença MIT. Ele foi projetado para criar aplicativos da Web e APIs. Foi chamado de estrutura de servidor padrão de fato para o Node.js.

- [SQLite](https://www.sqlite.org/index.html) - SQLite é uma biblioteca em linguagem C que implementa um banco de dados SQL embutido. Programas que usam a biblioteca SQLite podem ter acesso a banco de dados SQL sem executar um processo SGBD separado. 

- [Knex](http://knexjs.org/) - Knex.js é um criador de consultas SQL com "baterias incluídas" para Postgres, MySQL, MariaDB, SQLite3 e Oracle, projetado para ser flexível, portátil e divertido de usar. Ele apresenta retornos de chamada de estilo de nó tradicional, bem como uma interface de promessa para controle de fluxo assíncrono mais limpo, uma interface de fluxo, consulta com recursos completos e construtores de esquema, suporte a transações (com pontos de salvamento), pool de conexão e respostas padronizadas entre diferentes clientes de consulta e dialetos.

- [React](https://pt-br.reactjs.org/) - O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web. É mantido pelo Facebook, Instagram, outras empresas e uma comunidade de desenvolvedores individuais. É utilizado nos sites da Netflix, Imgur, Feedly, Airbnb, SeatGeek, HelloSign, Walmart e outros.
- [React Native](https://reactnative.dev/) - React Native é uma biblioteca Javascript criada pelo Facebook. É usada para desenvolver aplicativos para os sistemas Android e IOS de forma nativa.

- [Expo](https://expo.io/) - O Expo é uma ferramenta utilizada no desenvolvimento mobile com React Native que permite o fácil acesso às API’s nativas do dispositivo sem precisar instalar qualquer dependência ou alterar código nativo.

## Começando

Para conseguir utilizar ou visualizar o projeto, seja através do Visual Studio Code ou outro editor de código, siga os passos abaixo:

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
- É **necessário** possuir o **[Node.js](https://nodejs.org/en/)** instalado no computador
- É **necessário** possuir o **[Git](https://git-scm.com/)** instalado e configurado no computador
- Também, é **preciso** ter um gerenciador de pacotes seja o **[NPM](https://www.npmjs.com/)** ou **[Yarn](https://yarnpkg.com/)**.
- Por fim, é **essencial** ter o **[Expo](https://expo.io/)** instalado de forma global na máquina.

### Instalação

Para instalar esse projeto, o processo é bem simples. Basta utilizar o seguinte comando no terminal:

```bash
# Clone este repositório
$ git clone https://github.com/MTevangelista/noderest.git
```

### Rode a API

```bash
# Vá para a pasta do servidor
$ cd proffy/server

# Instale as depedencias
$ yarn install ou npm install

# Rode a aplicação
$ yarn start ou npm run start

# O servidor inciará na porta: 3333 - acesse http://localhost:3333 
```

### Rode o projeto Web

```bash
# Vá para a pasta web
$ cd Proffy/web

# Instale as depedencias
$ yarn install ou npm install

# Rode a aplicação
$ yarn start ou npm run start
```

### Rode o projeto Mobile

🚧 Em construção... 🚧

Para rodar o projeto mobile você precisa de um celular com o [expo](https://play.google.com/store/apps/details?id=host.exp.exponent) instlado ou um emulador android/ios.

```bash
# Vá para a pasta mobile
$ cd Proffy/mobile

# Instale as depedencias
$ yarn install ou npm install

# Rode a aplicação
$ yarn start ou npm run start
```
Depois leia o QRCode com o app do [expo](https://play.google.com/store/apps/details?id=host.exp.exponent) ou rode em um emulador.

---

## Contribuição

Contribuições são o que fazem a comunidade open source um lugar incrível para aprender, inspirar e criar. Qualquer contribuição que você fizer será **muito apreciada**.

1. Faça um Fork do projeto
2. Crie uma Branch para sua Feature (`git checkout -b feature/FeatureIncrivel`)
3. Adicione suas mudanças (`git add .`)
4. Comite suas mudanças (`git commit -m 'Adicionando uma Feature incrível!`)
5. Faça o Push da Branch (`git push origin feature/FeatureIncrivel`)
6. Abra um Pull Request

## Contato

👤  **Matheus Evangelista**

[![Github Badge](https://img.shields.io/badge/-Github-000?style=round-square&logo=Github&logoColor=white&link=https://github.com/MTevangelista)](https://github.com/MTevangelista)
[![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-blue?style=round-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/matheus01/)](https://www.linkedin.com/in/matheus01/)
[![Gmail Badge](https://img.shields.io/badge/-Gmail-c14438?style=round-square&logo=Gmail&logoColor=white&link=mailto:matheusevangelistadev@gmail.com)](mailto:matheusevangelistadev@gmail.com)
[![Instagram Badge](https://img.shields.io/badge/-Instagram-ba164a?style=round-square&logo=Instagram&logoColor=white&link=https://www.instagram.com/_matheusrj/?hl=pt-br)](https://www.instagram.com/_matheusrj/?hl=pt-br)
