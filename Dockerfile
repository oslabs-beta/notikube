FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm i
COPY . .
RUN npm run build
ENV NODE_ENV production
ENV PORT 80

EXPOSE 80

CMD ["npm", "start"]