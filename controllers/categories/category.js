const { doGetCategories } = require("./categoryController")

const getCategories = (req, res) => {
    doGetCategories(req.params.name).then((response)=>res.status(200).json(response))
    .catch((error)=>res.status(400).json(error))
}
module.exports = {getCategories}