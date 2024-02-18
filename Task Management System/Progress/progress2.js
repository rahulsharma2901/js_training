const progress2 = [];

function loadTasks() {
    var existingTasks = localStorage.getItem('tasks');
    var tasks = existingTasks ? JSON.parse(existingTasks) : [];

    progress2.length = 0;

    tasks.forEach(task => {
        if(task.progress === 'In-Progress'){
            progress2.push(task);
        }
    })

    updateTasks(progress2);
}

function updateTasks(tasks) {
    var output = document.getElementById('outputInProgress')
    output.innerHTML = '';
    
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

        var saveButton = document.createElement('button');
        saveButton.textContent = 'SAVE';
        saveButton.onclick = function() {
            titleElement.contentEditable = false;
            descriptionElement.contentEditable = false;
            dueElement.contentEditable = false;
            priority.contentEditable = false;
            teams.contentEditable = false;
            projects.contentEditable = false;
            departments.contentEditable = false;
            progress.contentEditable = false;
        }

        var deleteButton = document.createElement('button');
        deleteButton.textContent = "DELETE";
        deleteButton.onclick = function() {
            listItem.remove()
            localStorage.removeItem(task);
        };

        listItem.appendChild(boxElement);
        
        output.appendChild(listItem);

        var buttonContainer = document.createElement('div');
        buttonContainer.classList.add('box-buttons');

        buttonContainer.appendChild(saveButton);
        buttonContainer.appendChild(deleteButton);

        boxElement.appendChild(buttonContainer);
    })
}

window.onload = loadTasks;