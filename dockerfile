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

EXPOSE 4200

COPY --from=build /WebAngular/dist/mi-aplicacion /usr/share/nginx/html
