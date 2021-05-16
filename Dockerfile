FROM node:14

WORKDIR /usr/src/app

COPY package.json .
COPY yarn.lock .

RUN yarn install

ADD . /usr/src/app

ENTRYPOINT yarn docker-start