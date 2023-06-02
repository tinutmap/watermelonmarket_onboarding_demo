FROM nginx:alpine

# RUN apk add certbot certbot-nginx 

WORKDIR /etc/nginx

RUN rm ./conf.d/default.conf
COPY ./deploy/nginx/watermelonmarkets.conf ./conf.d/

COPY ./frontend/onboarding_demo/build /data/www

ENV TZ=America/New_York

# docker-entrypoint.d folder is where all entrypoint files ran in nginx:alpine
# COPY entrypoint.sh /docker-entrypoint.d
