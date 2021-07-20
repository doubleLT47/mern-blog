
require("dotenv").config();

const express = require('express');
const multer = require("multer");
const path = require("path");

const PORT = 8000 || process.env.PORT;
const app = express();

const db = require("./db");
const route = require("./routes");

const storage = multer.diskStorage({
    destination: (req, file, cb) => { 
      cb(null, "images")
    },
    filename: (req, file, cb) => { 
      cb(null, req.body.name)
    }
});
  
const upload = multer({storage: storage});

db.connect();

app.use(express.json());
app.use(express.urlencoded({
    extended: false,
}));
app.use("/images", express.static(path.join(__dirname,"/images")))

app.use("/api/upload", upload.single("file"), (req, res) => {
    res.status(200).json("File has been uploaded!");
})
route(app);

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
})
