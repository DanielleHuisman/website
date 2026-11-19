# Builder

FROM node:lts@sha256:e18c3ccdf7d71619990b0e85639f506e2028a95410999cab24cc373cbd10e0ac AS builder

WORKDIR /usr/src/website

COPY ../.. .

RUN npm ci

RUN npm run build

# Container

FROM nginx:stable-alpine@sha256:3bc3836dc0be3b811f238210360bf8e7ca8a2d0effdae46160bf1f3578710051

RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /usr/src/website/dist /usr/share/nginx/html/
COPY --from=builder /usr/src/website/assets/robots.txt /usr/share/nginx/html/
COPY --from=builder /usr/src/website/nginx.conf /etc/nginx/conf.d/default.conf
