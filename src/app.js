const express = require('express');
require("../src/db/conn");
const ODIRanking = require("../src/models/odiRanking");
const router = require('./routers/requests');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use(router);

app.listen(port, () => {
    console.log(`connection is live at port ${port} :)`);
})