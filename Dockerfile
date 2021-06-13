FROM node:6.14.4-alpine
WORKDIR /app
COPY . /app/
RUN npm install
EXPOSE 8000
CMD [ “npm”, “run”, "develop" ] 


