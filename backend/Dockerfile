FROM node:17

WORKDIR /app

COPY /package.json /app

COPY /package-lock.json /app

RUN npm install

COPY . /app

EXPOSE 5000

CMD ["node", "run"];