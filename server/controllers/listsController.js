const List = require('../models/list');
const HttpError = require('../models/httpError');
const { validationResult } = require('express-validator');

const createList = (req, res, next) => {
  const title = req.body.list.title;
  const boardId = req.body.boardId;
  const newList = { title, boardId, cards: [] };
  const errors = validationResult(req);

	if (errors.isEmpty()) {
		List.create(newList)
      .then((list) => {
        req.list = list;
        next();
      })
			.catch((err) => next(new HttpError('Creating list failed, please try again', 500)));
	} else {
    console.log(errors);
		return next(new HttpError('The input field is empty.', 404));
	}
};

const sendList = (req, res, next) => {
  res.json(req.list);
}

module.exports.createList = createList;
module.exports.sendList = sendList;
