const controllers = require("../controllers/");
const express = require("express");
const router = express.Router();
const { authentication } = require("../utilities");

router.get("/", controllers.Card.get);

router.post("/specificCard/:id", controllers.Card.specificCard);

router.post("/createPost", controllers.Card.post.createCard);
//now we need to add to a specific post

router.put("/:id", controllers.Card.put);

router.delete("/:id", controllers.Card.delete);
