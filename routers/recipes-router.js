const express = require("express")
const Recipe = require("../models/recipes")
const Instructions = require("../models/instructions")
const router = express.Router()


// get recipes
router.get("/", async (req, res, next) => {
    try {
        const recipes = await Recipe.getRecipes()
        res.json(recipes)
    } catch(err) {
        next(err)
    }
})

// get recipes by id
router.get("/:id", async (req, res, next) => {
    try {
        const recipe = await Recipe.getRecipeById(req.params.id)
        if(!recipe) {
            return res.status(404).json({
                message: "Cannot find a recipe with this ID"
            })
        }
        res.json(recipe)
    } catch(err) {
        next(err)
    }
 })

 // get list of ingredients and quantities for a single recipe
 router.get("/:id/shoppingList", async (req, res, next) => {
    try {
         const ingredients = await Recipe.getShoppingList(req.params.id)
         if(!ingredients) {
             return res.status(404).json({
                 message: "Cannot find a recipe with this ID"
             })
         }
         res.json(ingredients)
    } catch(err) {
        next(err)
    }
 })

 // get ordered list of how to prepare a recipe
 router.get("/:id/instructions", async (req, res, next) => {
    try {
         const instructions = await Instructions.getInstructions(req.params.id)
         if(!instructions) {
             return res.status(404).json({
                 message: "Cannot find recipe with this ID"
             })
         }
         res.json(instructions)
    } catch(err) {
        next(err)
    }
 })

module.exports = router