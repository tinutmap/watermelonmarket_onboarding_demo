FROM nginx:alpine

WORKDIR /etc/nginx

RUN rm ./conf.d/default.conf
COPY ./deploy/nginx/watermelonmarkets.conf ./conf.d/

COPY ./frontend/onboarding_demo/build /data/www

ENV TZ=America/New_York
