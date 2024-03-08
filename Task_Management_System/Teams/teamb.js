const teamB = [];

function loadTasks() {
    var existingTasks = localStorage.getItem('tasks');
    var tasks = existingTasks ? JSON.parse(existingTasks) : [];

    teamB.length = 0;

    tasks.forEach(task => {
        if(task.teams === 'BackEnd'){
            teamB.push(task);
        }
    })

    updateTasks(teamB);
}

function updateTasks(tasks) {
    var outputList = document.getElementById('outputTeamB')
    outputList.innerHTML = '';
    
    tasks.forEach(task => {
        var listItem = document.createElement('li');

        var boxElement = document.createElement('div');
        boxElement.classList.add('output-box');
	
	    var titleElement = document.createElement('h4');
        titleElement.textContent = task.title;

        var descriptionElement = document.createElement('p');
        descriptionElement.textContent = task.description;

        var dueElement = document.createElement('p');
        dueElement.textContent = "Due Date: " + task.dueDate;

        var priority = document.createElement('p');
        priority.textContent = "Priority Level: " + task.priority;

        var teams = document.createElement('p');
        teams.textContent = "Team Name: " + task.teams;

        var projects = document.createElement('p');
        projects.textContent = "Project Name: " + task.project;

        var departments = document.createElement('p');
        departments.textContent = "Department Name: " + task.department;

        var progress = document.createElement('p');
        progress.textContent = "Progress Level: " + task.progress;

        boxElement.appendChild(titleElement);
        boxElement.appendChild(descriptionElement);
        boxElement.appendChild(dueElement);
        boxElement.appendChild(priority);
        boxElement.appendChild(teams);
        boxElement.appendChild(projects);
        boxElement.appendChild(departments);
        boxElement.appendChild(progress);

        listItem.appendChild(boxElement);
        
        outputList.appendChild(listItem);
    })
}
window.onload = loadTasks