FROM mysql:5.7

ENV MYSQL_ROOT_PASSWORD=123
ENV MYSQL_DATABASE=TuSIA_historiaAcademica_db
ENV MYSQL_USER=sarodriguezca
ENV MYSQL_PASSWORD=aaaaa55555

COPY ./creationScript.sql /docker-entrypoint-initdb.d


EXPOSE 5354