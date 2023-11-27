FROM node:18-alpine as build

# Actualizando el sistema base
RUN mkdir -p /WebAngular

# Nos dirigimos a la carpeta
WORKDIR /WebAngular

COPY package.json /WebAngular

# Descargamos las dependencias referentes a la aplicación de angular
RUN npm install

COPY . /WebAngular

# Inicializando angular
RUN npm run build

FROM nginx:1.24.0-alpine 

COPY --from=build /WebAngular /usr/share/nginx/html

# API

FROM node:18-alpine

RUN mkdir -p /Api_server

WORKDIR /Api_server

COPY API/package.json /Api_server

COPY API/tsconfig.json /Api_server/

RUN npm install

COPY ./API /Api_server/

RUN npm run tsc src/index.ts

CMD ["node", "build/index.js"]
