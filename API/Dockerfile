# Node container to serve the Express API
    FROM node:latest
    WORKDIR /app
    COPY package*.json .
    RUN npm install
    COPY . .
    EXPOSE $NODE_LOCAL_PORT
    # change this to whatever script u have, maybe pm2 
    CMD [ "npm", "run", "dev" ]