# Builder

FROM node:latest AS builder

WORKDIR /usr/src/website

COPY ../.. .

RUN npm ci

RUN npm run build

# Container

FROM nginx:stable-alpine

RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /usr/src/website/packages/frontend/web/dist /usr/share/nginx/html/
COPY --from=builder /usr/src/website/packages/frontend/web/nginx.conf /etc/nginx/conf.d/default.conf
