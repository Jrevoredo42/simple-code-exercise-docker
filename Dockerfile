FROM node:14

WORKDIR /simple-code-exercise-docker
COPY . .

RUN npm install

ENTRYPOINT npm start