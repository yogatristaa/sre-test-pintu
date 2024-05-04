FROM node:alpine

WORKDIR /app

COPY package.json .  
COPY service.js .
RUN npm install

EXPOSE 8080

CMD ["node", "service.js"]