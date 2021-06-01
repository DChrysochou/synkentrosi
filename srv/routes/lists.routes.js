let express = require('express'),
    router = express.Router();

let lists = require('../models/list-schema');

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
  lists.findByIdAndDelete(req.params.id, (error, data) => {
    if (error) return next(error)
    else {
      res.json(data);
    }
  })
});

module.exports = router;