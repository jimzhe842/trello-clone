FROM node:15.1.0

LABEL version="1.0"
LABEL description="Docker base image for frontend of trello clone"

WORKDIR /app 

COPY ["package.json", "package-lock.json", "./"]

RUN yarn install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]