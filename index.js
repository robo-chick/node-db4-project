const express = require("express")
const helmet = require("helmet")
const recipesRouter = require("./routers/recipes-router")
const ingredientsRouter = require("./routers/ingredients-router")

const server = express()
const port = process.env.PORT || 5000

server.use(helmet())
server.use(express.json())

server.use('/api/recipes', recipesRouter)
server.use('/api/ingredients', ingredientsRouter)

server.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({
        message: "Sorry, something went wrong.",
    })
})

server.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})

