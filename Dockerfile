FROM node:12.2.0-alpine
WORKDIR /app
COPY . /app/
ENV PORT 4000
ENV REACT_APP_API_URL https://tumblrx.me:9000
ENV REACT_APP_API_KEY Value
ENV REACT_APP_SOCKET_URL ws://tumblrx.me:6600
ENV SERVER true
EXPOSE 4000
RUN npm install --silent
CMD ["npm","start"]
