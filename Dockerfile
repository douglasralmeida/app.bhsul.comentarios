FROM node:argon
MAINTAINER douglasralmeida <douglasralmeida@live.com>

# Atualiza o sistema e apaga arquivos de atualizacao
RUN apt-get update && apt-get dist-upgrade -y && apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

# Cria o diretório da aplicação
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Instalar as dependências da aplicação
COPY package.json /usr/src/app/
RUN npm install

# Enviar a aplicação para o container
COPY server.js /usr/src/app
COPY routes /usr/src/app

# Porta
EXPOSE 8080

# Iniciar a aplicação ao iniciar o container
CMD [ "npm", "start" ]