const article = require("../../models/articleModel")
const { validateCreateAndEditArticle } = require("../validations/articleValidations")

const doCreateArticle = (data) => {
    return new Promise(async (resolve, reject) => {
        const dataValidation = await validateCreateAndEditArticle(data)
        if (dataValidation.error) {
            return reject({
                status: false,
                error: dataValidation.error.details[0].message.replace(/"/g, ""),
            });
        }
        const articleObj = {
            heading: data.heading,
            readTime: data.readTime,
            description: data.description,
            categories: data.categories,
            isVerified: data.isVerified,
            isNewest: data.isNewest,
            isTrending: data.isTrending
        }
        const Article = new article(articleObj)
        Article.save().then((_) => {
            return resolve({
                status: true,
                message: 'Article Created'
            });
        }).catch((error) => {
            return reject({
                status: false,
                error: error,
            });
        })
    })
}
const doEditArticle = (data, id) => {
    return new Promise(async (resolve, reject) => {
        const articleObj = {
            heading: data.heading,
            readTime: data.readTime,
            description: data.description,
            categories: data.categories,
            isVerified: data.isVerified,
            isNewest: data.isNewest,
            isTrending: data.isTrending
        }
        const dataValidation = await validateCreateAndEditArticle(data)
        if (dataValidation.error) {
            return reject({
                status: false,
                error: dataValidation.error.details[0].message.replace(/"/g, ""),
            });
        }

        await article.findByIdAndUpdate(id, articleObj).then(() => {
            return resolve({
                status: true,
                message: 'Article Edited',
            });
        }).catch((error) => {
            return reject({
                status: false,
                error: error,
            });
        })

    })


}
const doDeleteArticle = (id) => {
    return new Promise(async (resolve, reject) => {
        await article.findByIdAndDelete(id).then((_) => {
            return resolve({
                status: true,
                message: 'Article Deleted'
            });
        }).catch((error) => {
            return reject({
                status: false,
                error: error
            });
        })
    })
}
const doGetArticle = () => {
    return new Promise(async (resolve, reject) => {
        await article.find({}).then((data) => {
            return resolve({
                status: true,
                data: data
            });
        }).catch((error) => {
            return reject({
                status: false,
                error: error
            });
        })
    })
}
const doGetCategoryArticle = (category) => {
    return new Promise(async (resolve, reject) => {
        await article.find({ "categories": { $in: [category] } }).then((data) => {
            return resolve({
                status: true,
                data: data
            });
        }).catch((error) => {
            return reject({
                status: false,
                error: error
            });
        })
    })
}
module.exports = { doCreateArticle, doEditArticle, doDeleteArticle, doGetArticle, doGetCategoryArticle }