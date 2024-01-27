FROM node:latest

# Install basic development tools
RUN apt update && apt install -y less man-db sudo

WORKDIR /my-back

COPY package*.json ./
RUN npm install

COPY . .

CMD ["npm", "run", "start"]