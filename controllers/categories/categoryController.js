const category = require("../../models/categoryModel");

const doGetCategories = () => {
    return new Promise(async (resolve, reject) => {
        await category.find({}).then((data) => {
            console.log(data);
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
module.exports = {doGetCategories}