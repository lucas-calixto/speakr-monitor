FROM node:20

WORKDIR /app

COPY package*.json ./
RUN npm install --production

COPY . .

RUN npm start

EXPOSE 8800

CMD ["npm", "run", "start"]
