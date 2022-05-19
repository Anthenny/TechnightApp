FROM node:16.15-alpine3.14

WORKDIR /app

COPY /package.json /app

COPY /package-lock.json /app

COPY . /app

RUN npm install

EXPOSE 5000

CMD ["node", "run"];