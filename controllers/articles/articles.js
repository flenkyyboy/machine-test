const { doCreateArticle, doEditArticle,doDeleteArticle,doGetArticle,doGetCategoryArticle,doGetCategories} = require("./articlesControllers")

const getArticles = (req, res) => {
    doGetArticle().then((response)=>res.status(200).json(response))
    .catch((error)=>res.status(400).json(error))
}
const createArticle = (req, res) => {
    doCreateArticle(req.body).then((response)=>res.status(200).json(response))
    .catch((error)=>res.status(400).json(error))
}
const editArticle = (req, res) => {
    doEditArticle(req.body,req.params.id).then((response)=>res.status(200).json(response))
    .catch((error)=>res.status(400).json(error))
}
const deleteArticle = (req, res) => {
    doDeleteArticle(req.params.id).then((response)=>res.status(200).json(response))
    .catch((error)=>res.status(400).json(error))
}
const getCategoryArticle = (req, res) => {
    doGetCategoryArticle(req.params.name).then((response)=>res.status(200).json(response))
    .catch((error)=>res.status(400).json(error))
}

module.exports = {createArticle,editArticle,deleteArticle,getArticles,getCategoryArticle}