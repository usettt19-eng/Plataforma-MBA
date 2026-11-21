FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY campus-certificacion/ /usr/share/nginx/html/

EXPOSE 80
