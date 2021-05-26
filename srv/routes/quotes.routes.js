let express = require('express'),
    fetch = require('node-fetch'),
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
                  let date = new Date(),
                      days = date.getTime() / (1000*60*60*24), 
                      idx = Math.floor(days) % json.length;

                  return json[idx];
                });
}

module.exports = router;