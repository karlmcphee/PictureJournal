const express = require('express')
const app = express()
app.use(express.json())
require('./db/mongoose')
var cors = require('cors')
app.use(express.urlencoded({ extended: true }));


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.all('/*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Content-Type");
    next();
});

app.use(cors({
    origin: ['localhost:3000', 'https://www.google.com']
}))

const pictureRouter = require('./routers/pictures')
app.use(pictureRouter)


const port = process.env.PORT || 9000

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})