FROM ubuntu:22.04

# Actualizando el sistema base
RUN apt-get update && apt-get -y upgrade

# Asegurandonos de tener los paquetes que necesitamos y comprobamos las versiones
RUN apt-get install -y nodejs git
RUN git --version
RUN node --version
RUN npm --version

# Descargamos el contenedor 
RUN git clone https://github.com/cesarol/WebAngularSencilla.git

# Nos dirigimos a la carpeta
WORKDIR /WebAngularSencilla

# Descargamos las dependencias referentes a la aplicación de angular
RUN npm install