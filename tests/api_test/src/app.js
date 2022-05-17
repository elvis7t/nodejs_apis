const express = require("express");

class AppController {
    constructor() {
        this.express = express();

        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.express.use(express.json());
    }

    routes() {
        this.express.use(require("./routes"));

    }
}
// instancia o app controller retornando so o express
module.exports = new AppController().express;