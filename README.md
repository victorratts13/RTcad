# RTcad
Sistema de controle de Custos React + Bootstrap.

### frameworks e tecnologias usadas:
 >-  concurrently: "^4.1.0",
 >-  cors: "^2.8.5",
 >-  express: "^4.16.4",
 >-  mysql: "^2.16.0",
 >-  react: "^16.8.3",
 >-  react-dom: "^16.8.3",
 >-  react-router: "^3.2.1",
 >-  react-scripts: "2.1.5"
 
 ## Instalação e execução
  - 1: clone este repositório
  - 2: execute *~$ npm install* para instalar todos os modulos e dependencias
  - 3: configure um banco de dados mysql e edite o arquivo server.js na linha 12
    >- host: 'seu_host_mysql',
    >- user: 'usuario_DB',
    >- password: 'senha_DB',
    >- database: 'Banco_de_dados'
     > recomendo por padrão, que o banco de dados criado se chame RTcad para facilitar a importação do arquivo RTcad.sql
  - 4: em seu servidor mysql, importe o arquivo RTcad.sql dentro do banco de dados que o RTcad irá se conectar
    >- Caso queira, crie manualmente as tabelas CDD, CFDA e CDG com as configuraçoes correntes no sistema
  - 5: execute *~$ npm start*

