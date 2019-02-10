FROM node:6.9.4-alpine

RUN mkdir -p /usr/src/nodeapp/Nodeserver

WORKDIR /usr/src/nodeapp/Nodeserver

COPY . /usr/src/nodeapp/Nodeserver

RUN npm install  --silent --no-cache

EXPOSE 8001

CMD ["npm", "run", "dev"]