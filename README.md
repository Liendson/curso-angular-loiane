# Projeto de Estudo Angular

## Arquitetura e organização do projeto.

O projeto foi gerado com o angular - CLI e está organizado na seguinte estrutura:

	|-- e2e 				             # Diretório que contém os scripts para testes end-to-end
	|-- node_modules		          # Diretório com os pacotes de dependencias instalados pelo ngm
	|-- src 				             # Pasta com o Código Fonte do projeto
		|-- app 			     	       # Pasta com os Componentes do projeto
			|-- component 		 	    # Template da Pasta com o código do Componente
				|-- component.css		 # Código de Estilo do Componente
				|-- component.html 	 # Código de Marcação do Componente
				|-- component.spec.ts # Código de Teste do Componente
				|-- component.ts 		 # Código TypeScript do Componente
		|-- assets			          # Pasta de recursos (Ex: imagens, fontes, etc)
		|-- environments 		       # Ícone de exibição na guia do navegador
		|-- browserslist 		       # HTML inicial 
		|-- favicon.ico 		       # Ícone Favicon do Projeto 
		|-- index.html 			    # HTML inicial 
		|-- karma.conf.js 		    # Arquivo de Configuração de Testes
		|-- main.ts 			       # Arquivo responsável por inicializar a aplicação
		|-- polyfills.ts 		       # Arquivo de conversão para ES5
		|-- styles.scss 			    # Estilos Globais do Projeto 
		|-- test.ts 			       # 
		|-- tsconfig.app.json 	    # Arquivo de configurações do TypeScript
		|-- tsconfig.spec.json 	    # Arquivo de testes das configurações do TypeScript
		|-- tslint.json 		       # Arquivo de configuração de sintaxe do projeto
	|-- .editorconfig		          # Arquivo de configuração de codificação projeto
	|-- .gitignore  		          # Arquivo contendo os ignores para o git
	|-- angular.json 		          # Arquivo com as informações de configuração do projeto
	|-- package-lock.json 	       # Arquivo de Dependências (recorda exatamente a versão instalada da dedendência)
	|-- package.json 		          # Arquivo de Dependências (recorda a versão mínima necessária da dependência)
	|-- README.md 			          # Arquivo de Apresentação do Projeto
	|-- tsconfig.json 		       # Arquivo de Configuração do TypeScript
	|-- tslint.json 		          # Arquivo de configuração de sintaxe do projeto

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

Com isso, o projeto será executado no navegador em http://localhost:4200/.