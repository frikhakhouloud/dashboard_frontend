FROM node:18.15.0

WORKDIR /app
COPY src /app/src
COPY *.json /app
RUN npm install
RUN npm run build

CMD ["npm", "start"]
