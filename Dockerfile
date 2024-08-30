FROM node:17.9.1

WORKDIR /app

COPY package.json /app

RUN npm install

RUN npm run build

EXPOSE 3000

CMD [ "npm", "run", "start" ]