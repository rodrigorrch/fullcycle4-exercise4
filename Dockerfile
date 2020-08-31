FROM node:12.14.0-alpine3.11

RUN apk add --no-cache bash git vim

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH
ENV CI=true

COPY . .
RUN npm install
RUN npm install react-scripts@3.4.0 -g
RUN npm install axios react-router-dom bootstrap @types/react-dom @types/react-router --save

EXPOSE 3000

CMD ["npm", "run", "start"]