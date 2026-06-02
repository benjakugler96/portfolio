FROM node:21-alpine3.17

RUN apk add curl

RUN npm i -g pnpm

WORKDIR /app

COPY package.json pnpm-lock.yaml ./


RUN pnpm install

COPY . ./

CMD ["pnpm", "run", "dev"]
