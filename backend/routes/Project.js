const controllers = require("../controllers/");
const express = require("express");
const router = express.Router();
const { authentication } = require("../utilities");

router.get("/", controllers.Project.get);

router.post("/specificProject/:id", controllers.Project.specificProject);

router.post("/createProject", controllers.Project.post.createProject);
//now we need to add to a specific post

router.put("/:id", controllers.Project.put);

router.delete("/:id", controllers.Project.delete);
