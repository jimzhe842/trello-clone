const Board = require('../models/board');
const HttpError = require('../models/httpError');
const { validationResult } = require('express-validator');

const getBoards = (req, res, next) => {
	Board.find({}, 'title _id createdAt updatedAt').then((boards) => {
		res.json({
			boards
		});
	});
};

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

const createBoard = (req, res, next) => {
	const errors = validationResult(req);
	if (errors.isEmpty()) {
		Board.create(req.body.board)
			.then((board) => {
				Board.find({ _id: board._id }, 'title _id createdAt updatedAt').then((board) => res.json({ board }));
			})
			.catch((err) => next(new HttpError('Creating board failed, please try again', 500)));
	} else {
		return next(new HttpError('The input field is empty.', 404));
	}
};

exports.getBoards = getBoards;
exports.getBoard = getBoard;
exports.createBoard = createBoard;
