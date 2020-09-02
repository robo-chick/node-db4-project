const db = require("../data/config")

function getInstructions(recipe_id) {
    return db("recipe_instructions as ri")
    .join("recipes as r", "r.id", "ri.recipe_id")
    .join("instructions as i", "i.id", "ri.instruction_id")
    .where("ri.recipe_id", recipe_id)
    .select(
        "r.name as Recipe Name",
        "i.stepNumber as Step Number",
        "i.instructions"
    )
    .orderBy("i.stepNumber")
}

module.exports = {
    getInstructions,
}