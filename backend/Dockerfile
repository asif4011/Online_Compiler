FROM node:alpine

WORKDIR /server

COPY ./package.json .
COPY ./package-lock.json .

RUN npm install

RUN apk add python3 && alias python=python3

COPY . .

EXPOSE 5000


CMD ["node","index.js"]

