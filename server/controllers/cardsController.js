const Card = require('../models/card');
const HttpError = require('../models/httpError');
const { validationResult } = require('express-validator');


function createCard(req, res, next) {
  const listId = req.body.listId;
  const boardId = req.body.boardId;
  const title = req.body.card.title;
  const newCard = {
    title,
    description: "",
    boardId,
    listId,
    archived: false,
    completed: false,
  }

  const errors = validationResult(req);

	if (errors.isEmpty()) {
		Card.create(newCard)
      .then((card) => {
        req.card = card;
        next();
      })
			.catch((err) => next(new HttpError('Creating card failed, please try again', 500)));
	} else {
    console.log(errors);
		return next(new HttpError('The input field is empty.', 404));
	}
}

function sendCard(req, res, next) {
  res.json(req.card);
}

exports.createCard = createCard;
exports.sendCard = sendCard;
