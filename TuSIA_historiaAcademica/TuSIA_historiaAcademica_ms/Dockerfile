FROM node:16

WORKDIR /usr/src/app


COPY package*.json ./

RUN npm install nodemon -g

RUN npm install @babel/core @babel/node -g

RUN npm install

COPY . .

EXPOSE 8080

CMD ["sudo", "chmod", "+x", "/usr/src/app/node_modules/.bin/nodemon"]

CMD ["npm", "run", "dev"]
