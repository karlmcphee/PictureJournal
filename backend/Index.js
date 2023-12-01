const express = require('express')
const app = express()

const videoRouter = require('./routers/videos')

const port = process.env.PORT || 9000

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})