FROM jpai/nodejs_mongodb_basic
RUN git clone https://github.com/J-Pai/info_server.git
RUN mongod &
RUN cd info_server && npm install
CMD npm start
