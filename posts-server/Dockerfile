#creating base image
FROM node:alpine

#making directory inside container
WORKDIR /usr/app

#copying files from the current local directory to container working directory
COPY ./package.json ./

RUN npm install

COPY ./ ./

CMD ["npm","start"]