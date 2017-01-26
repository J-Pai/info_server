FROM jpai/nodejs_mongodb_basic
RUN git clone https://github.com/J-Pai/info_server.git
CMD mongod
