# Projeto de Estudo Angular

## Arquitetura e organização do projeto.

O projeto foi gerado com o angular - CLI e está organizado na estrutura padrão do Angular.

Pastas e Organizações -

|-- modules

    |-- module1
        |-- [+] components
        |-- module1.service.ts
        |-- module1.module.ts
        |-- module1.routes.ts

|-- shared
        |-- [+] components
        |-- [+] mocks
        |-- [+] models
        |-- [+] directives
        |-- [+] pipes

|-- core
        |-- [+] authentication
        |-- [+] footer
        |-- [+] guards
        |-- [+] http
        |-- [+] interceptors
        |-- [+] mocks
        |-- [+] services
        |-- [+] header

|-- app.module.ts
|-- app.component.ts

## Instalação do projeto

Ao fazer checkout do projeto no git, é necessário baixar todas as dependências referênte ao mesmo.
Para baixar as dependências do projeto, é preciso ter o [Node.js] instalado na máquina,
caso não tenha pode ser baixado através do link: [Node.js](https://nodejs.org/en/download/).

Após instalar o [Node.js], deve-se instalar através do [NPM] todas as dependências do projeto, que 
pode ser feito através do seguinte comando, utilizando o prompt de comando do windows:

[npm install -g]

## Executando o projeto

Com todas as dependências instaladas, já podemos executar o projeto client. Isso é feito através do seguinte comando:

[ng serve]

Com isso, o projeto será executado no navegador em http://localhost:4200/

