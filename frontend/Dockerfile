FROM node:17

WORKDIR /frontend-app

COPY package.json /frontend-app/
COPY package-lock.json /frontend-app/

COPY . /frontend-app

RUN npm install

CMD ["npm", "start", "ios"]