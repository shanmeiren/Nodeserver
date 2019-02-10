FROM node:latest

RUN mkdir -p /usr/src/nodeapp/hellotony

WORKDIR /usr/src/nodeapp/hellotony

COPY . /usr/src/nodeapp/hellotony

RUN npm install --registry=https://registry.npm.taobao.org --silent --no-cache

EXPOSE 3000


CMD ["npm", "run", "dev"]