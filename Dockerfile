FROM node:10
EXPOSE 3500
COPY server.js .
CMD ["node","server.js"]
