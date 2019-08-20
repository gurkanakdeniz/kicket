FROM node:10.16.0-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package*.json /usr/src/app/

RUN rm -rf node_modules
RUN npm install

# Bundle app source
COPY . .

EXPOSE 3000
CMD [ "node", "./bin/www" ]
