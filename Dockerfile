FROM node:12-alpine

RUN npm install -g @nestjs/cli@6.5
RUN apk update && apk add git

RUN mkdir workspace
WORKDIR /workspace
