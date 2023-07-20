const express = require('express');
const { isAuthenticated } = require('../middlewares/authMiddleware');
const { createRecipe, getRecipes, getRecipeById, updateRecipe, deleteRecipe, fetchRecipesBySearchTerm } = require('../controllers/recipeController');

const router = express.Router();

router.post('/addRecipe', createRecipe);
router.get('/', getRecipes);
router.patch('/update/:recipeId', isAuthenticated, updateRecipe);
router.delete('/delete/:recipeId', isAuthenticated, deleteRecipe);
router.get('/:recipeId', getRecipeById);
router.get('/queryRecipes/:userId', fetchRecipesBySearchTerm);

module.exports = router;