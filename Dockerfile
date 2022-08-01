FROM node:lts-alpine

WORKDIR /usr/src/app
RUN apk add --no-cache \
      chromium \
      nss \
      freetype \
      harfbuzz \
      ca-certificates \
      ttf-freefont
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \
    PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser

RUN yarn add puppeteer@10.0.0
     
COPY package*.json yarn.lock ./
RUN yarn cache clean
RUN yarn install

COPY . .

EXPOSE 3000

RUN yarn run build