FROM node:13.7.0

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

ENV PORT=3000

EXPOSE 3000

CMD ["npm", "run", "start"]