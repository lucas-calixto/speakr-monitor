FROM node:20

WORKDIR /

COPY package*.json ./
RUN npm install --omit=dev

COPY . .

RUN npm start

EXPOSE 8800

CMD ["npm", "run", "start"]
