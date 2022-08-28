const ProductController = require('../controllers/person.controller');
module.exports = function(app){
    app.post('/api/people', ProductController.createPerson);
}