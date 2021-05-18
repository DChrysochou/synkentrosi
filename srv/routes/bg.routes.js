let express = require('express'),
    fs = require('fs'),
    path = require('path'),
    router = express.Router();

router.route('/').get((req, res) => {
  let bg = getRandomBackground();
  res.send(bg);
})

getRandomBackground = () => {
  let bgPath = path.join(__dirname, '..', 'assets', 'backgrounds');
  let files = fs.readdirSync(bgPath);
  if (files) {
    let date = new Date(),
        days = date.getTime() / (1000*60*60*24), 
        idx = Math.floor(days) % files.length;
      
    return files[idx];
  }
}

module.exports = router;