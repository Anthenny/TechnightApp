FROM node:15

WORKDIR /app

COPY package.json /app

RUN npm install

RUN npm install -D @swc/cli @swc/core

COPY . /app

EXPOSE 3000

CMD ["npm","run", "dev"];