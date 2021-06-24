const Comment = require('../models/comment');
const HttpError = require('../models/httpError');
const { validationResult } = require('express-validator');

const createComment = (req, res, next) => {
  const cardId = req.body.cardId;
  const text = req.body.comment.text;
  const newComment = {
    text,
    cardId,
  }
  const errors = validationResult(req);

	if (errors.isEmpty()) {
		Comment.create(newComment)
      .then((comment) => {
        req.comment = comment;
        next();
      })
			.catch((err) => next(new HttpError('Creating comment failed, please try again', 500)));
	} else {
    console.log(errors);
		return next(new HttpError('The input field is empty.', 404));
	}
}

function sendComment(req, res, next) {
  res.json(req.comment);
}

exports.createComment = createComment;
exports.sendComment = sendComment;