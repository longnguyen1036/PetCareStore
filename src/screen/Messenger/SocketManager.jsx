import io from 'socket.io-client';

class SocketManager {
  static instance = null;
  socket = null;
  serverUrl = 'http://192.168.1.6:9998';

  constructor() {
    if (!SocketManager.instance) {
      SocketManager.instance = this;
      this.socket = io(this.serverUrl, {
        transports: ['websocket'],
        jsonp: false,
      });
    }
    return SocketManager.instance;
  }

  getSocket() {
    return this.socket;
  }
  listenSocket(){
    this.socket.on('printer',(data)=>{
        console.log(data)
    })
  }
}

export default new SocketManager();
