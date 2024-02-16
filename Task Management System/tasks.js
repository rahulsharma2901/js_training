function saveTask(task) {
    var existingTasks = localStorage.getItem('tasks');
    var tasks = existingTasks ? JSON.parse(existingTasks) : [];

    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
function loadTasks() {
    var existingTasks = localStorage.getItem('tasks');
    var tasks = existingTasks ? JSON.parse(existingTasks) : [];

    updateTasks(document.getElementById('output'), tasks);
    loadTasksForTeam('frontEndTeam', 'FrontEnd', 'outputTeamA');
}

function updateTasks(output, team, tasks) {
    output.innerHTML = '';
    tasks.forEach(task => {
        if (task.teams === team){

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
        
            var editButton = document.createElement('button');
            editButton.textContent = "Edit";
            editButton.onclick = function() {
                titleElement.contentEditable = true;
                descriptionElement.contentEditable = true;
                dueElement.contentEditable = true;
                priority.contentEditable = true;
                teams.contentEditable = true;
                projects.contentEditable = true;
                departments.contentEditable = true;
                progress.contentEditable = true;
            
                saveButton.style.display = 'inline-block';
                editButton.style.display = 'none';
            };
        
            var saveButton = document.createElement('button');
            saveButton.textContent = 'Save';
            saveButton.onclick = function() {
                titleElement.contentEditable = false;
                descriptionElement.contentEditable = false;
                dueElement.contentEditable = false;
                priority.contentEditable = false;
                teams.contentEditable = false;
                projects.contentEditable = false;
                departments.contentEditable = false;
                progress.contentEditable = false;
            
                saveButton.style.display = 'none';
                editButton.style.display = 'inline-block'
            }
        
            var deleteButton = document.createElement('button');
            deleteButton.textContent = "Delete";
            deleteButton.onclick = function() {
                listItem.remove()
                localStorage.removeItem(task);
            };
            
            listItem.appendChild(boxElement);
        
            output.appendChild(listItem);
        
            var buttonContainer = document.createElement('div');
            buttonContainer.classList.add('box-buttons');
            
            buttonContainer.appendChild(editButton);
            buttonContainer.appendChild(saveButton);
            buttonContainer.appendChild(deleteButton);
        
            boxElement.appendChild(buttonContainer);
        
            document.getElementById('title').value = '';
            document.getElementById('description').value = '';
            document.getElementById('dueDate').value = '';
            document.getElementById('priorities').value = 'priorityLevel';
            document.getElementById('teamSelection').value = 'teams';
            document.getElementById('projectList').value = 'projects';
            document.getElementById('departmentsList').value = 'departments';
            document.getElementById('progressLevelList').value = 'progressLevel';
        };
    })
}

function createTask() {         
    var titleInput = document.getElementById('title').value;
    var descriptionInput = document.getElementById('description').value;
    var dueDateInput = document.getElementById('dueDate').value;
    var priorityInput = document.getElementById('priorities').value;
    var teamSelection = document.getElementById('teamSelection').value;
    var projectInput = document.getElementById('projectList').value;
    var departmentsList = document.getElementById('departmentsList').value;
    var progressLevel = document.getElementById('progressLevelList').value;
    var output = document.getElementById('output');

    if (titleInput.trim() !== '' && descriptionInput.trim() !== '' && dueDateInput.trim() !== '' && priorityInput.trim() !== '' && teamSelection.trim() !== ''){

        var task = {
            title: titleInput,
            description: descriptionInput,
            dueDate: dueDateInput,
            priority: priorityInput,
            teams: teamSelection,
            project: projectInput,
            department: departmentsList,
            progress: progressLevel
        };

        var listItem = document.createElement('li');

        var boxElement = document.createElement('div');
        boxElement.classList.add('output-box');

	    var titleElement = document.createElement('h4');
        titleElement.textContent = titleInput;

        var descriptionElement = document.createElement('p');
        descriptionElement.textContent = descriptionInput;

        var dueElement = document.createElement('p');
        dueElement.textContent = "Due Date: " + dueDateInput;

        var priority = document.createElement('p')
        priority.textContent = "Priority Level: " + priorityInput;

        var teams = document.createElement('p');
        teams.textContent = "Team Name: " + teamSelection;

        var projects = document.createElement('p');
        projects.textContent = "Project Name: " + projectInput;

        var departments = document.createElement('p');
        departments.textContent = "Department Name: " + departmentsList;

        var progress = document.createElement('p');
        progress.textContent = "Progress Level: " + progressLevel;

        
        boxElement.appendChild(titleElement);
        boxElement.appendChild(descriptionElement);
        boxElement.appendChild(dueElement);
        boxElement.appendChild(priority);
        boxElement.appendChild(teams);
        boxElement.appendChild(projects);
        boxElement.appendChild(departments);
        boxElement.appendChild(progress);
        
        saveTask(task);

        var editButton = document.createElement('button');
        editButton.textContent = 'EDIT';
        editButton.onclick = function() {
            titleElement.contentEditable = true;
            descriptionElement.contentEditable = true;
            dueElement.contentEditable = true;
            priority.contentEditable = true;
            teams.contentEditable = true;
            projects.contentEditable = true;
            departments.contentEditable = true;
            progress.contentEditable = true;
        }

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
        deleteButton.textContent = 'DELETE';
        deleteButton.onclick = function() {
            listItem.remove();
        }

        listItem.appendChild(boxElement);
        
        output.appendChild(listItem);

        var buttonContainer = document.createElement('div');
        buttonContainer.classList.add('box-buttons');

        buttonContainer.appendChild(editButton);
        buttonContainer.appendChild(saveButton);
        buttonContainer.appendChild(deleteButton);

        boxElement.appendChild(buttonContainer);

        loadTasks();
        
        document.getElementById('title').value = '';
        document.getElementById('description').value = '';
        document.getElementById('dueDate').value = '';
        document.getElementById('priorities').value = 'priorityLevel';
        document.getElementById('teamSelection').value = 'teams';
        document.getElementById('projectList').value = 'projects';
        document.getElementById('departmentsList').value = 'departments';
        document.getElementById('progressLevelList').value = 'progressLevel';
        
    }
}
window.onload = loadTasks;