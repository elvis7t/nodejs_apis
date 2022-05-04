FROM node:alpine

WORKDIR /home/node/app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 9001

CMD ["npm", "start"]