exports.seed = async function(knex) {
  await knex("recipes").insert([
    {name: "Pancakes"},
    {name: "Chicken Parmesan"},
    {name: "Beer Stew"},
    {name: "Chili"}
  ])
}