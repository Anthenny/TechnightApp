FROM node

WORKDIR /frontend-app

COPY package.json /frontend-app/
COPY package-lock.json /frontend-app/

RUN npm install

COPY . /frontend-app

CMD ["npm", "start", "ios"]