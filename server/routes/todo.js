const express = require('express');
const router = express.Router();

const {getTodo,addTodo,updateTodo,removeTodo} = require('../controllers/todoController')


router.get('/',getTodo)
router.post('/',addTodo)
router.put('/:id',updateTodo)
router.delete('/:id',removeTodo)

module.exports = router