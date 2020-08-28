const express = require("express")
const helmet = require("helmet")

const server = express()
const port = process.env.PORT || 5000

server.use(helmet())
server.use(express.json())

server.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({
        message: "Sorry, something went wrong.",
    })
})

server.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})

