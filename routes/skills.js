var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controllers/skills');


// GET /skills --- INDEX!
router.get('/', skillsCtrl.index);
// Remember to define before the show route
router.get('/new', skillsCtrl.new);
// GET /skills/:id --- SHOW!
router.get('/:id', skillsCtrl.show);
router.get('/:id/edit', skillsCtrl.edit);
// POST /todos
router.post('/', skillsCtrl.create);
// DELETE /todos/:id
router.delete('/:id', skillsCtrl.delete);

router.put('/:id', skillsCtrl.update);
module.exports = router;
