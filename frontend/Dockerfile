FROM node:16.15-alpine3.14

RUN npm i -g expo-cli@5.4.6

WORKDIR /app

COPY package.json /app
COPY package-lock.json /app

COPY . /app

RUN npm install

EXPOSE 19002

CMD ["npm", "run", "start" ]