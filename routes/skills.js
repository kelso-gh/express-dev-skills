var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controllers/skills');

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// GET /skills --- INDEX!
router.get('/', skillsCtrl.index);
// GET /skills/:id --- SHOW!
router.get('/:id', skillsCtrl.show);

module.exports = router;
