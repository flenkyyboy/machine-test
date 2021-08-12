const Joi = require('joi')

const validateCreateAndEditArticle = (data) => {
    const schema = Joi.object({
        heading: Joi.string().required().label('Heading'),
        readTime: Joi.string().required().label('Read Time'),
        description: Joi.string().required().label('Description'),
        categories: Joi.array().required().label('Category'),
        isVerified: Joi.boolean().required().label('Verified'),
        isNewest: Joi.boolean().label('Newest'),
        isTrending: Joi.boolean().required().label('Trending')
    })
    return schema.validate(data)
}
module.exports = {validateCreateAndEditArticle}