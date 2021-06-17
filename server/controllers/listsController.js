const List = require('../models/list');
const HttpError = require('../models/httpError');
const { validationResult } = require('express-validator');

const createList = (req, res, next) => {
  const newList = { title: req.body.list.title, boardId: req.body.boardId, cards: [] };
  const errors = validationResult(req);

	if (errors.isEmpty()) {
		List.create(newList)
      .then((list) => {
        List.find({ _id: list._id }, 'boardId title _id createdAt updatedAt cards').then((list) => res.json({ list }));
      })
			.catch((err) => next(new HttpError('Creating list failed, please try again', 500)));
	} else {
    console.log(errors);
		return next(new HttpError('The input field is empty.', 404));
	}
};

module.exports.createList = createList;