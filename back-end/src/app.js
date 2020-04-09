import express from 'express';

class App {
    constructor() {
        this.server = express();

        this.middlewares();
    }

    middlewares() {
        console.log('?');
    }
}

export default new App().server;
