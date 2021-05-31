let express = require('express'),
    router = express.Router();

let todo = require('../models/todo-schema');

router.route('/').get(async (req, res) => {
  let data = await todo.find((error, data) => {
    if (error) return next(error);
    else return data;
  });

  let lists = await todo.distinct("list");
  let dataObj = {
    "items": data,
    "lists": lists
  }
  
  res.send(dataObj);
})

router.route('/create').post((req, res, next) => {
  todo.create(req.body, (error, data) => {
    if (error) return next(error);
    else {
      console.log(data);
      res.json(data);
    }
  })
});

router.route('/:id').delete((req, res, next) => {
  todo.findByIdAndDelete(req.params.id, (error, data) => {
    if (error) return next(error)
    else {
      res.json(data);
    }
  })
});

router.route('/:id').post((req, res, next) => {
  todo.findByIdAndUpdate(req.params.id, { completed: req.body.state }, 
    (error, data) => {
      if (error) return next(error)
      else {
        res.json(data);
      }
   })
});

module.exports = router;