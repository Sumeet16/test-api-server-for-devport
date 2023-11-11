const express = require('express');
const cors = require("cors");

const app = express();

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(cors({
    origin: ["http://localhost:3000", "http://localhost:5173", "*"],
    methods: ["GET", "POST"],
    credentials: true
}))

app.use(express.json());

const port = process.env.PORT || 3000;

app.get('/', (req, res) => { res.json({ message: "You've come to the right place... it's a GET request!!" }) });
app.get('/port', (req, res) => { res.json({ message: `${port}` }) });

app.listen(port);
console.log(`App listening on port ${port}`);