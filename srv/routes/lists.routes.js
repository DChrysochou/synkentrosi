let express = require('express'),
    router = express.Router();

let lists = require('../models/list-schema');
let todo = require('../models/todo-schema');

router.route('/').get(async (req, res) => {
  lists.find((error, data) => {
    if (error) return next(error);
    else res.json(data);
  });
})

router.route('/create').post((req, res, next) => {
  lists.create(req.body, (error, data) => {
    if (error) return next(error);
    else {
      console.log(data);
      res.json(data);
    }
  })
});

router.route('/:id').delete((req, res, next) => {
  // First delete all Todo items attached to that list
  todo.deleteMany({'list' : req.params.id}, (error) => {
    if (error) return next(error);

    lists.findByIdAndDelete(req.params.id, (error, data) => {
      if (error) return next(error)
      else {
        res.json(data);
      }
    })
  });
});

module.exports = router;