const db = require("../data/config")

function getIngredients() {
    return db("ingredients")
}

function getIngredientsById(id) {
    return db("ingredients")
    .where("id", id)
    .first()
}

module.exports = {
    getIngredients,
    getIngredientsById
}