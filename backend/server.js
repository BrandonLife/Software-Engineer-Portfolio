const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");


const app = express();

app.use(bodyParser.json());
dotenv.config();
const routes = require("./routes/ProjectRoute");
const emailRoutes = require('./routes/emailRoute')
const productionRoutes = require('./routes/productionRoute')

const PORT = process.env.PORT | 5000;

app.use(express.json());

app.use(cors());

mongoose
	.connect(process.env.MONGO_URI)
	.then(() => console.log("MongoDB Connected..."))
	.catch((err) => console.log(err));

app.use("/api", routes);
app.use('/api', emailRoutes)
app.use('/', productionRoutes)

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
