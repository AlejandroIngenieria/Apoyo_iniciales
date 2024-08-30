FROM node:16
# WORKDIR = espacio de trabajo dentro del contenedor donde se guardara nuestro codigo
WORKDIR /app
# COPY = indicamos que se copie la informacion de nuestro codigo
COPY . /app
# RUN = indicamos todos los comandos necesarios para que nuestro programa funcione
RUN npm install
# EXPOSE = mostramos el puerto donde queremos que se ejecute nuestro programa
EXPOSE 5000

# CMD = Aqui colocamos los comandos que hacen comenzar nuestro proyecto
CMD ["npm", "start"]