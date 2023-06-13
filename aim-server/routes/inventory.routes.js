const express = require('express')
const recipeControllers = require('../controllers/recipe.controllers')
const router = express.Router()

router.get('/', recipeControllers.getRecipeList)
router.get('/all', recipeControllers.getRecipeListAll)
router.get('/:id', recipeControllers.getRecipeDetail)
router.post('/', recipeControllers.createRecipe)

module.exports = router
