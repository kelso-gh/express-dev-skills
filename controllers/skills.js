const Skill = require('../models/skill');

module.exports = {
    index,
    show,
    new: newSkill, 
    create,
    delete: deleteSkill, //cannot use delete alone
    edit, 
    update
};

function update(req, res) {
    req.body.level = !!req.body.level;
    Skill.update(req.params.id, req.body);
    res.redirect(`/skills/${req.params.id}`);
}

function edit(req, res) {
//Need to select one in the list using getOne method
    const skill = Skill.getOne(req.params.id);
    res.render('skills/edit', {
        title: 'Manage Skills',
        skill
    });
}

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

function newSkill(req, res) {
    res.render('skills/new', { title: 'New Skill' });
}

// SHOW function
function show(req, res) {
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id),
        title: 'Skills Details'
    });
}

// INDEX function 
function index(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll()
    });
}