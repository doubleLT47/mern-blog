
require("dotenv").config();

const express = require('express');
const multer = require('multer');

const PORT = 8000 || process.env.PORT;
const app = express();

const db = require("./db");
const route = require("./routes");

db.connect();

app.use(express.json());
app.use(express.urlencoded({
    extended: false,
}));

route(app);

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
})
