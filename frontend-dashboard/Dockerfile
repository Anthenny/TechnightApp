FROM node:16.15-alpine3.14

WORKDIR /app

COPY package.json /app

COPY /package-lock.json /app

COPY . /app

RUN cd /app && npm install

EXPOSE 3000

CMD ["npm","run", "dev"];

