const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotanv = require("dotenv");
const colors = require("colors");
const connectDb = require("./config/config");

//config env
dotanv.config();
connectDb();

//rest object
const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));

//routes
app.use("/api/items", require("./routes/itemRoutes"));

//port
const port = process.env.PORT || 9000;

//listen
app.listen(port, () => {
  console.log(`server running on ${port} Successfully`);
});
