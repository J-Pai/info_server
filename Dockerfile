FROM jpai/nodejs_basic
RUN git clone https://github.com/J-Pai/info_server.git
RUN cd info_server && npm install && mkdir database
CMD cd info_server && git pull && npm start
