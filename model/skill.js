const devSkills = [
    {skill: 'JavaScript', ready: false},
    {skill: 'HTTP', ready: true},
    {skill: 'CSS', ready: false}
];

module.exports = {
    getAll
};

function getAll() {
    return devSkills;
}