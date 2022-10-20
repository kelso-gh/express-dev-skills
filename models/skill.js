const devSkills = [
    {id: 22222, skill: 'JavaScript', level: 'novice'},
    {id: 33333, skill: 'HTTP', level: 'beginner'},
    {id: 44444, skill: 'CSS', level: 'beginner'}
];

module.exports = {
    getAll,
    getOne,
    create
};

function getAll() {
    return devSkills;
}

function getOne(id) {
    id = parseInt(id);
    return devSkills.find(skill => skill.id === id);
}

function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.level = false;
    skills.push(skill);
}