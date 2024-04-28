const config = require("../config/config");
const models = require("../models");
const Utilities = require("../utilities");

module.exports = {
	get: (req, res, next) => {
		models.Card.find()
			.then((posts) => {
				return res.send(posts);
			})
			.catch(next);
	},
	specificCard: (req, res, next) => {
		const id = req.params.id;
		models.Card.findOne({ _id: id })
			.then((card) => res.send(card))
			.catch(next);
	},
	post: {
		createCard: (req, res, next) => {
			const { Title, imageUrl, Summary, Link, dateMade } = req.body;

			models.Card.create({ Title, imageUrl, Summary, Link, dateMade })
				.then((createdCard) => res.send(createdCard))
				.catch(next);
		},
	},

	put: (req, res, next) => {
		const id = req.params.id;
		const { Title, imageUrl, Summary, Link, dateMade } = req.body;
		console.log(req, "req object for Card");
		models.Card.updateOne({
			_id: id,
			title: Title,
			imageURL: imageUrl,
			summary: Summary,
			Link: Link,
			Date: dateMade,
		})
			.then((updatedCard) => res.send(updatedCard))
			.catch(next);
	},

	delete: (req, res, next) => {
		let id = req.params.id;
		console.log(req);
		models.Card.deleteOne({ _id: id })
			.then((removedCard) => res.send(removedCard))
			.catch(next);
	},
};
