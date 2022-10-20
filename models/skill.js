const devSkills = [
    {id: 17853, skill: 'JavaScript', level: 'novice'},
    {id: 98365, skill: 'HTTP', level: 'novice'},
    {id: 28610, skill: 'CSS', level: 'novice'}
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
};

function update(id, updatedSkill) {
    //Selecting the id in the array again
    //returns int
    id = parseInt(id);
    // "" as const + = findIndex =>
    const skill = devSkills.find(skill => skill.id === id);
    skill.skill = updatedSkill;
    Object.assign(skill, updatedSkill);
}

// Allows user to delete skill from the list
function deleteOne(id) {
    //selecting id in the array
    //returns integer
    id = parseInt(id);
    // Create value idx ---> use .findIndex() method
    // Pass => through ()
    const idx = skills.findIndex(skill => skill.id === id);
    //Remove with one .splice() method 
    skills.splice(idx, 1);
}

function getAll() {
    return devSkills;
}

function getOne(id) {
    id = parseInt(id);
    return devSkills.find(skill => skill.id === id);
}

function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.level = 'novice';
    devSkills.push(skill);
}