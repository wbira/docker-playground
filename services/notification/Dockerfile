FROM node:12.18.3-alpine3.12 as build
WORKDIR /usr/src/app
COPY package*.json ./ 
COPY tsconfig.json ./
COPY tslint.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:12.18.3-alpine3.12 as deps
WORKDIR /usr/src/app
COPY package*.json ./ 
RUN npm install --production

FROM node:12.18.3-alpine3.12
WORKDIR /usr/src/app
COPY --from=deps /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/dist ./dist
EXPOSE 8081
CMD ["node", "dist/server.js"]  

