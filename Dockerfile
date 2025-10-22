FROM node:18-slim

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

# Azure provides port via $PORT environment variable
ENV PORT=8080

EXPOSE 8080

# Ensure your app listens on process.env.PORT
CMD ["npm", "start"]
