FROM node:20-alpine

WORKDIR /app

COPY package.json ./
RUN yarn install --production --non-interactive

COPY . .

ENV PORT=3000
ENV DEPLOY_ENV="Docker Container"

EXPOSE 3000

CMD ["node", "server.js"]

