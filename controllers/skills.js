const Skill = require('../models/skill');

module.exports = {
    index,
    show,
    create
};

function create(req, res) {
    Skill.create(req.body);
    res.redirect('/skills')
}

// SHOW function
function show(req, res) {
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id)
        // title: 'Skills Details'
    });
}

// INDEX function 
function index(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll()
    });
}