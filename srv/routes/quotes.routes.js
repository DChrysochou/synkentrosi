let express = require('express'),
    fetch = require('node-fetch'),
    utils = require('../utils'),
    router = express.Router();

router.route('/').get((req, res) => {
  getRandomQuote()
  .then(quote => {
    res.send(quote);
  });
})

getRandomQuote = () => {
  return fetch('https://type.fit/api/quotes')
                .then(res => res.json())
                .then(json => {
                  let index = utils.getDailyIndex(json);
                  return json[index];
                });
}

module.exports = router;