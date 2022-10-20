const Skill = require('../models/skill');

module.exports = {
    index,
    show,
    create,
    delete: deleteSkill //cannot use delete alone
};

function deleteSkill(req, res) {
    //obtain the property
    Skill.deleteOne(req.params.id);
    //redirect when there has been a change
    res.redirect('/skills');
}

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