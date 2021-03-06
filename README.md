# RTcad
Sistema de controle de Custos React + Bootstrap.

### frameworks e tecnologias usadas:
 >- BootsTrap: "4.0.2"
 >-  concurrently: "^4.1.0",
 >-  cors: "^2.8.5",
 >-  express: "^4.16.4",
 >-  mysql: "^2.16.0",
 >-  react: "^16.8.3",
 >-  react-dom: "^16.8.3",
 >-  react-router: "^3.2.1",
 >-  react-scripts: "2.1.5"
 >-  ChartJs: "2.7"
 
 ## Instalação e execução
  - 1: clone este repositório
  - 2: execute *~$ npm install* para instalar todos os modulos e dependencias
  - 3: configure um banco de dados mysql e edite o arquivo server.js na linha 13
    >- host: 'seu_host_mysql',
    >- user: 'usuario_DB',
    >- password: 'senha_DB',
    >- database: 'Banco_de_dados'
     - *obs: recomendo por padrão, que o banco de dados criado se chame RTcad para facilitar a importação do arquivo RTcad.sql*
  - 4: em seu servidor mysql, importe o arquivo RTcad.sql dentro do banco de dados que o RTcad irá se conectar
    >- Caso queira, crie manualmente as tabelas CDD, CFDA e CDG com as configuraçoes correntes no sistema
  - 5: execute *~$ npm start* e aguarde a execução.
    - *obs: o sistema é executado nas portas 3300 e 3000. Caso essas portas estejam inutilizáveis ou ocupadas, atualizar o arquivo server.js com as portas desejadas.
## ScreamShorts

![RTcad - Pagina Inicial Desktop](https://i.imgur.com/qIaGlu7.png)
![RTcad - Pagina CFDA Desktop](https://i.imgur.com/hpYwhtk.png)
![RTcad - Pagina CGD Desktop](https://i.imgur.com/d41NICg.png)
![RTcad - Pagina Mobile 0 Desktop](https://i.imgur.com/eygGV3r.png)
![RTcad - Pagina Mobile 1 Desktop](https://i.imgur.com/Za1fXdW.png)
