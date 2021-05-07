let express = require('express'),
    router = express.Router();

let todo = require('../models/todo-schema');

router.route('/').get((req, res) => {
  todo.find((error, data) => {
    if (error) return next(error)
    else {
      res.json(data)
    }
  })
})

router.route('/create').post((req, res, next) => {
  todo.create(req.body, (error, data) => {
    if (error) return next(error)
    else {
      console.log(data)
      res.json(data)
    }
  })
});

module.exports = router;