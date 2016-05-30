FROM 128.no:8080/backend-comm
MAINTAINER Pål Karlsrud <paal@128.no>

ENV BASE_DIR /var/status

RUN apk-install nodejs nginx
RUN git clone https://github.com/microserv/status ${BASE_DIR}

RUN curl -o /etc/supervisor.d/nginx.ini https://128.no/f/nginx.ini

RUN cp ${BASE_DIR}/status.conf /etc/nginx/conf.d/
RUN curl -o /etc/nginx/nginx.conf https://128.no/f/nginx.conf

WORKDIR ${BASE_DIR}
RUN npm install .
RUN npm run build

ENV PATH ${BASE_DIR}/node_modules/.bin:$PATH
ENV SERVICE_NAME status

EXPOSE 80
