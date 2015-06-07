var RtmClient = function (socket) {
    console.log('User connected');
    this.socket = socket;

    socket.on("updateModel", this.onUpdateModel);
};

RtmClient.prototype.onDisconnect = function () {
    console.log('User disconnected');
};

module.exports = RtmClient;




