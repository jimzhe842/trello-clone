const Card = require('../models/card');
const HttpError = require('../models/httpError');
const { validationResult } = require('express-validator');
const Board = require('../models/board');


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

function getCard (req, res, next) {
  const errors = validationResult(req);
  const id = req.params.id.toString();

  if (errors.isEmpty()) {
    Card.findById(id, (err, card) => {
      req.card = card;
      next();
    })
  } else {
    console.log(errors);
		return next(new HttpError('Error getting the card.', 404));
  }
  
}

exports.createCard = createCard;
exports.sendCard = sendCard;
exports.getCard = getCard;

/*
const getBoard = (req, res, next) => {
	const id = req.params.id.toString();

	Board.findOne({ _id: id }, 'title _id createdAt updatedAt')
    .populate({ path: 'lists',
      populate: { path: 'cards'}
    })
    .exec((err, board) => {
      if (err) {
        console.log(err);
        next(new HttpError('boardId not found, please try again', 404));
      }
      res.json(board);
    });
};
  */
