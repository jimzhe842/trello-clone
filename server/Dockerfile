FROM node:15.1.0

LABEL version="1.0"
LABEL description="Docker base image for backend of trello clone"

WORKDIR /app 

COPY ["package.json", "package-lock.json", "./"]

RUN yarn install

COPY . .

EXPOSE 5000

CMD ["yarn", "run", "start-watch"]