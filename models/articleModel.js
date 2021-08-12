const mongoose = require('mongoose')

const schema = mongoose.Schema({
    heading:String,
    readTime:String,
    description:String,
    categories:Array,
    isVerified:{type:Boolean,default:false},
    isNewest:{type:Boolean,default:true},
    isTrending:{type:Boolean,default:false}

})
const article = mongoose.model('Article',schema)
module.exports = article