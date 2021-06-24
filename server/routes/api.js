const express = require('express');
const router = express.Router();
const boardsController = require('../controllers/boardsController');
const listsController = require('../controllers/listsController');
const cardsController = require('../controllers/cardsController');
const commentsController = require('../controllers/commentsController');
const { validateBoard } = require('../validators/validators');

router.get('/boards', boardsController.getBoards);

router.get('/boards/:id', boardsController.getBoard);

router.post('/boards', validateBoard, boardsController.createBoard);

router.post('/lists', listsController.createList, boardsController.addListToBoard, listsController.sendList);

router.put('/lists/:id', listsController.updateList, listsController.sendList);

router.post('/cards', cardsController.createCard, listsController.addCardToList, cardsController.sendCard);

router.get('/cards/:id', cardsController.getCard, cardsController.sendCard);

router.put('/cards/:id', cardsController.updateCard, cardsController.sendCard);
// finding card, creating actions, updating card, sending card
// modularize finding the card from update card
// figure out what things create an action (changing description)
  // changing description checking if description changed
  // if true then add a new action
router.post('/comments', commentsController.createComment, cardsController.addCommentToCard, commentsController.sendComment);

// router.post('/api/cards/:id', actionsController.createAction)

module.exports = router;
