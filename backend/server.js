const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const allowedOrigins = require('./OriginAccess')

const app = express();

app.use(bodyParser.json());
dotenv.config();
const routes = require("./routes/ProjectRoute");
const emailRoutes = require('./routes/emailRoute')

const PORT = process.env.PORT | 5000;

app.use(express.json());
const corsOptions = {
	origin: (origin, callback)=>{
		if(allowedOrigins.indexOf(origin) !== -1 || !origin){
			callback(null, true)
		}else{
			callback(new Error('Not allowed by Cors'))
		}
	},
	credentials: true,
	optionsSuccessStatus: 200
} 
app.use(cors(corsOptions));

mongoose
	.connect(process.env.MONGO_URI)
	.then(() => console.log("MongoDB Connected..."))
	.catch((err) => console.log(err));

app.use("/api", routes);
app.use('/api', emailRoutes)

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
