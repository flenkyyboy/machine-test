const express = require('express')

const { createArticle, editArticle, deleteArticle, getArticles,getCategoryArticle} = require('../controllers/articles/articles')
const { getCategories } = require('../controllers/categories/category')

const router = express.Router()

//Articles Routes
router.get('/', getArticles)
router.post('/create-article', createArticle)
router.post('/edit-article/:id', editArticle)
router.delete('/delete-article/:id', deleteArticle)
//Category Routes
router.get('/get-category-article/:name', getCategoryArticle)
router.get('/get-categories', getCategories)




module.exports = router