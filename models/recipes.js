const db = require("../data/config")

function getRecipes() {
    return db("recipes")
}

function getRecipeById(id) {
    return db("recipes")
        .where("id", id)
        .first()
}

function getShoppingList(recipe_id) {
    return db("recipe_ingredients as ri")
        .join("recipes as r", "r.id", "ri.recipe_id")
        .join("ingredients as i", "i.id", "ri.ingredient_id")
        .where("ri.recipe_id", recipe_id)
        .select(
            "r.name as Recipe Name",
            "i.name as Ingredient Name",
            "i.quantity as Quantity"
        )
}

module.exports = {
    getRecipes,
    getRecipeById,
    getShoppingList
}