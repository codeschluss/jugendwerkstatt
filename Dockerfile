FROM alpine:latest
LABEL maintainer info@codeschluss.de
COPY / /tmp/jugendwerkstatt.client
RUN \
  #
  # packages
  apk --no-cache add \
  nginx && \
  apk --no-cache --virtual build add \
  g++ \
  make \
  npm \
  python3 && \
  #
  # jugendwerkstatt.client
  cd /tmp/jugendwerkstatt.client && \
  npm install && \
  npm run -- build && \
  mkdir -p /usr/share/webapps && \
  mv build /usr/share/webapps/jugendwerkstatt.client && \
  #
  # deploy
  echo \
  'server {'  \
    'listen 80;' \
    'listen [::]:80;' \
    'root /usr/share/webapps/jugendwerkstatt.client;' \
    'location / {' \
      'try_files $uri /index.html;' \
    '}' \
  '}' \
  > /etc/nginx/http.d/default.conf && \
  #
  # cleanup
  apk del --purge build && \
  find /root /tmp -mindepth 1 -delete
#
# runtime
CMD nginx -g 'daemon off;'
EXPOSE 80
