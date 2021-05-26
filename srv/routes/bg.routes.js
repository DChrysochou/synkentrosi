let express = require('express'),
    fs = require('fs'),
    path = require('path'),
    utils = require('../utils'),
    router = express.Router();

router.route('/').get((req, res) => {
  let bg = getRandomBackground();
  res.send(bg);
})

getRandomBackground = () => {
  let bgPath = path.join(__dirname, '..', 'assets', 'backgrounds');
  let files = fs.readdirSync(bgPath);
  if (files) {
    let index = utils.getDailyIndex(files);
    return files[index];
  }
}

module.exports = router;