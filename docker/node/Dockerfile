FROM node:10

WORKDIR /usr/src/app

COPY package*.json ./
COPY .babelrc ./
COPY docker-compose.yml ./
COPY src src/
COPY server.js ./
RUN npm install

# Expose the default port
EXPOSE 5000

# Set Command
CMD ["npm", "start"]