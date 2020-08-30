FROM node:alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./app

# RUN npm cache clean --force
RUN npm install
RUN npm install react-scripts@3.4.1 -g
RUN npm install axios react-router-dom

COPY . ./app

# start app
CMD ["npm", "run", "start"]