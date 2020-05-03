FROM node:13.12.0-alpine

WORKDIR /usr/src/app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY yarn.lock ./

RUN yarn

COPY . ./

RUN CI=true yarn test
RUN yarn build