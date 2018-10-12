FROM nginx:latest
ADD ./build/ /app/
ADD ./config/nginx.conf /etc/nginx/conf.d/nginx.conf
ADD ./config/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80