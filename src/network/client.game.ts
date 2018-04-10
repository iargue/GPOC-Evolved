var primus = new primus()


export class network {
    primus: any;
    constructor() {
        this.primus = new primus()
        primus.on('data', this.processData)
    }
    processData(message) {
        console.log('Recieved' + message)
    }
    send(type, data) {
        primus.write({type: data})
    }
}