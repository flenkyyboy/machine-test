const mongoose = require('mongoose')

const schema = mongoose.Schema({
    name:String
})
const category = mongoose.model('Category',schema)
module.exports = category