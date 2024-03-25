FROM nginx:1.24.0

COPY ./dist /usr/share/nginx/html
COPY ./nginx/default.conf.template /etc/nginx/templates/default.conf.template

EXPOSE 80