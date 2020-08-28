exports.up = async function(knex) {
    await knex.schema.createTable("recipes", (table) => {
        table.increments("id")
        table.text("name").notNull()
    })

    await knex.schema.createTable("ingredients", (table) => {
        table.increments("id")
        table.text("name").notNull()
        table.float("quantity").notNull
    })

    await knex.schema.createTable("instructions", (table) => {
        table.increments("id")
        table.text("instructions").notNull()
        table.integer("stepNumber").notNull()
        table.integer("recipe_id").notNull().references("id").inTable("recipes").onDelete("CASCADE").onUpdate("CASCADE")
    })

    await knex.schema.createTable("recipe_ingredients", (table) => {
        table.integer("recipe_id").notNull().references("id").inTable("ingredients").onDelete("CASCADE").onUpdate("CASCADE")
        table.integer("ingredient_id").notNull().references("id").inTable("ingredients").onDelete("CASCADE").onUpdate("CASCADE")
        table.primary(["recipe_id", "ingredient_id"])
    })

    await knex.schema.createTable("recipe_instructions", (table) => {
        table.integer("recipe_id").notNull().references("id").inTable("recipes").onDelete("CASCADE").onUpdate("CASCADE")
        table.integer("instruction_id").notNull().references("id").inTable("instructions").onDelete("CASCADE").onUpdate("CASCADE")
        table.primary(["recipe_id", "instruction_id"])
    })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("recipe_instructions")
    await knex.schema.dropTableIfExists("recipe_ingredients")
    await knex.schema.dropTableIfExists("instructions")
    await knex.schema.dropTableIfExists("ingredients")
    await knex.schema.dropTableIfExists("recipes")
};

