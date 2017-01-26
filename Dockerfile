FROM jpai/nodejs_mongodb_basic
RUN git clone https://github.com/J-Pai/info_server.git
RUN cd info_server && npm install
RUN sudo mkdir -p /data/db
CMD cd info_server && (sudo mongod &) && npm start
