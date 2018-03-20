const express = require('express');
const router = express.Router();

const {getAllTodo,addTodo,getByIdTodo,updateTodo,removeTodo,completeTodo,uncompleteTodo} = require('../controllers/todoController')


router.get('/:id',getAllTodo)
router.post('/',addTodo)
router.get('/byid/:id',getByIdTodo)
router.put('/:id',updateTodo)
router.put('/completed/:id',completeTodo)
router.put('/uncompleted/:id',uncompleteTodo)
router.delete('/:id',removeTodo)

module.exports = router