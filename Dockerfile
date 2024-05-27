FROM node:20-slim

ARG MAPBOX_API_KEY
ARG CONNECTION_STRING
ENV MAPBOX_API_KEY=$MAPBOX_API_KEY
ENV CONNECTION_STRING=CONNECTION_STRING

# Setting working directory. All the path will be relative to WORKDIR
WORKDIR /usr/src/app
# Installing dependencies
COPY package*.json ./
# Copying source files
COPY . .
RUN npm install
# Building app
RUN npm run build
EXPOSE 3000
# Running the app
CMD [ "npm", "start" ]