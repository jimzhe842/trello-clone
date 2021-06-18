const express = require('express');
const router = express.Router();
const boardsController = require('../controllers/boardsController');
const listsController = require('../controllers/listsController');
const cardsController = require('../controllers/cardsController');
const { validateBoard } = require('../validators/validators');

router.get('/boards', boardsController.getBoards);

router.get('/boards/:id', boardsController.getBoard);

router.post('/boards', validateBoard, boardsController.createBoard);

router.post('/lists', listsController.createList, boardsController.addListToBoard, listsController.sendList);

router.put('/lists/:id', listsController.updateList, listsController.sendList);

router.post('/cards', cardsController.createCard, listsController.addCardToList, cardsController.sendCard);

module.exports = router;
