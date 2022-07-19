# Node container to serve the Express API
    FROM node:10
    RUN mkdir -p /usr/src/app
    WORKDIR /usr/src/app
    COPY package*.json .
    RUN npm install
    COPY . .
    
    # change this to whatever script u have, maybe pm2 
    CMD ["npm", "run", "dev"] 