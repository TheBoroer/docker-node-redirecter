FROM node:8.4.0

RUN mkdir -p /usr/src/app
COPY server.js /usr/src/app/

EXPOSE 80
CMD ["node", "/usr/src/app/server.js"]