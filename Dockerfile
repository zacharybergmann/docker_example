FROM node:7
RUN mkdir /docker_example
ADD . /docker_example
WORKDIR /docker_example
RUN  npm i
EXPOSE 7000
CMD ["npm", "start"]
