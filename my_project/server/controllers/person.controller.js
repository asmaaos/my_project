const { Product } = require('../models/person.model');
  // The method below is new
module.exports.createPerson = (request, response) => {
    const { title, price,desc } = request.body;
    Product.create({
        title,
        price,
        desc,
    })
        .then(Product => response.json(Product))
        .catch(err => response.json(err));
}