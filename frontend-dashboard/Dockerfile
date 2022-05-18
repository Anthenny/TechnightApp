FROM node:17

WORKDIR /app

COPY package.json /app

COPY /package-lock.json /app

COPY . /app

RUN cd /app && npm install

EXPOSE 3000

RUN npm run build

CMD ["npm","run", "start"];

