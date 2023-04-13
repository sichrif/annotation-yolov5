FROM node:16.16.0

RUN apt-get update && apt-get -y install git && rm -rf /var/lib/apt/lists/*

COPY ./ /annotation-maker

RUN cd /annotation-maker && \
  npm install

WORKDIR /annotation-maker

ENTRYPOINT ["npm", "run", "dev"]
