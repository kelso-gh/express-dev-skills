const devSkills = [
    {id: 22222, skill: 'JavaScript', level: 'novice'},
    {id: 33333, skill: 'HTTP', level: 'beginner'},
    {id: 44444, skill: 'CSS', level: 'beginner'}
];

module.exports = {
    getAll,
    getOne
};

function getAll() {
    return devSkills;
}

// function getOne() {

// };