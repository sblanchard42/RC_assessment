const express = require("express");
const bodyParser = require("body-parser");
const compression = require("compression");
const cors = require("cors");
const helmet = require("helmet");
const employeeRouter = require("./routes/employees-route");

const PORT = 3001;
const app = express();

app.use(cors());
app.use(helmet());
app.use(compression());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/employee", employeeRouter);

app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something is broken.');
});

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});