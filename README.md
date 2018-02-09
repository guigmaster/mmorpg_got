# MMORPG - Game of Thrones

Aplicação nodejs para acesso ao banco de dados NoSQL MongoDB;

### Requisitos da Aplicação

* Node.js
* MongoDB

### Instalação

Para realizar a instalação, clone o projeto em uma pasta no su sistema de arquivos, duplique o arquivo **.env.examplo** para **.env** e edite para as configuração do seu ambiente;

```bash
PORT=3000 # porta onde o servidor irá rodar

DB_HOST=localhost # host de conexão do MongoDB
DB_PORT=27017    # porta de acesso do MongoDB
DB_NAME=got      # nome da coleção para realizar as operações
```

<p style="color: #f00">* # Importante verifique se o servico mongod está em execução*</p>
