const express = require("express")
const Ingredients = require("../models/ingredients")
const router = express.Router()

router.get("/", async (req, res, next) => {
    try {
        const ingredients = await Ingredients.getIngredients()
        res.json(ingredients)
    } catch(err) {
        next(err)
    }
})

router.get("/:id", async (req, res, next) => {
   try {
       const ingredient = await Ingredients.getIngredientsById(req.params.id)
       if(!ingredient) {
           return res.status(404).json({
               message: "Cannot find ingredient with this ID"
           })
       }
       res.json(ingredient)
   } catch(err) {
       next(err)
   }
})

module.exports = router