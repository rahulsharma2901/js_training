const teamA = [];

function updateTeamATasks(outputList) {
    localStorage.getItem('tasks', JSON.stringify(loadTasks), outputList);

};
console.log("Is Team A running");