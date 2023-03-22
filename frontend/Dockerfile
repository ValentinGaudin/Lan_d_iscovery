#######################
### NODE BASE IMAGE ###
#######################
FROM node:lts-alpine AS frontend-base

RUN apk --update --no-cache add nano bash

WORKDIR /app

########################
### NODE LOCAL IMAGE ###
########################
FROM frontend-base AS frontend-local

ENV NODE_ENV=development

COPY docker/node/docker-entrypoint-local.sh /usr/local/bin/docker-entrypoint.sh
RUN chmod +x /usr/local/bin/docker-entrypoint.sh

EXPOSE 3000

##########################
### NODE BUILDER IMAGE ###
##########################
# This image is used for SPA in production
# This image is used to build sources of your app and get the /dist (or equivalent) folder
FROM frontend-base AS builder

COPY package.json ./
COPY package-lock.json ./

RUN yarn --frozen-lockfile

ENV NODE_ENV=production

COPY . .

RUN yarn build

##############################
### FRONT NGINX PROD IMAGE ###
##############################
# Get the /dist folder from build and add it to the front nginx
# This image is used for SPA in production
FROM nginx:stable AS frontend-webserver-production

RUN mkdir /app
RUN mkdir /static-logs
RUN touch /static-logs/access.log
RUN touch /static-logs/error.log

COPY --from=builder /app/dist /app
COPY docker/nginx/nginx.conf /etc/nginx/nginx.conf