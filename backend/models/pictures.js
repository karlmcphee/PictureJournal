const mongoose = require('mongoose')

const pictureSchema = new mongoose.Schema({
    pictureName: {
        type: String,
        required: true,
    },
    user :
    {
        type: String,
        required: true,
    }
})

const Picture = mongoose.model('Picture', pictureSchema)

module.exports = Picture