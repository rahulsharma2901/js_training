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

    var teamFilter = getTeamFilter();
    var teamTasks = tasks.filter(task => task.teams === teamFilter);

    updateTasks(document.getElementById('outputTeamA'), teamTasks);
    updateTasks(document.getElementById('outputTeamB'), teamTasks);
    updateTasks(document.getElementById('outputTeamC'), teamTasks);

    var projectFilter = getProjectFilter();
    var projectTasks = tasks.filter(task => task.projects === projectFilter);

    updateTasks(document.getElementById('outputProject1'), projectTasks);
    updateTasks(document.getElementById('outputProject2'), projectTasks);
    updateTasks(document.getElementById('outputProject3'), projectTasks);

    var deptFilter = getDeptFilter();
    var deptTasks = tasks.filter(task => task.departments === deptFilter);

    updateTasks(document.getElementById('outputAdministration'), deptTasks);
    updateTasks(document.getElementById('outputDevelopers'), deptTasks);
    updateTasks(document.getElementById('outputMarketing'), deptTasks);

    var priorityFilter = getPriorityFilter();
    var priorityTasks = tasks.filter(task => task.priority === priorityFilter);

    updateTasks(document.getElementById('outputHigh'), priorityTasks);
    updateTasks(document.getElementById('outputMedium'), priorityTasks);
    updateTasks(document.getElementById('outputLow'), priorityTasks);

    var progressFilter = getProgressFilter();
    var progressTasks = tasks.filter(task => task.progress === progressFilter);

    updateTasks(document.getElementById('outputTodo'), progressTasks);
    updateTasks(document.getElementById('outputInProgress'), progressTasks);
    updateTasks(document.getElementById('outputCompleted'), progressTasks);
}
function editChanges() {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const task = tasks.find(task => task.title === title)

    if(task) {
        task.contentEditable = true;
        document.getElementById(`saveButton-${taskIndex}`).style.display = 'inline-block';
        document.getElementById(`editButton-${taskIndex}`).style.display = 'none';
    }
}
function saveChanges(taskIndex) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const task = tasks[taskIndex];

    if(task) {
        task.title = document.getElementById(`editedTitle-${taskIndex}`).textContent;
        task.description = document.getElementById(`editedDescription-${taskIndex}`).textContent;
        task.dueDate = document.getElementById(`editedDueDate-${taskIndex}`).textContent;
        task.priority =document.getElementById(`editedPiority-${taskIndex}`).textContent;
        task.teams = document.getElementById(`editedTeams-${taskIndex}`).textContent;
        task.project = document.getElementById(`editedProject-${taskIndex}`).textContent;
        task.department = document.getElementById(`editedDepartment-${taskIndex}`).textContent;
        task.progress = document.getElementById(`editedProgress-${taskIndex}`).textContent;

        task.contentEditable = false;
        document.getElementById(`saveButton-${taskIndex}`).style.display = 'none';
        document.getElementById(`editButton-${taskIndex}`).style.display = 'inline-block';

        localStorage.setItem('tasks',JSON.stringify(tasks));

        loadTasks();
    }
}
function deleteTask(taskIndex) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.splice(taskIndex, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    loadTasks();
}

function updateTasks(output, tasks) {
    output.innerHTML = '';
    tasks.forEach((task, index) => {
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
        editButton.textContent = "EDIT";
        editButton.id = `editButton-${index}`;
        editButton.onclick = function() {
            editChanges(task.title, index);
        };

        var saveButton = document.createElement('button');
        saveButton.textContent = 'SAVE';
        saveButton.id = `saveButton-${index}`;
        saveButton.style.display = 'none';
        saveButton.onclick = function() {
            saveChanges(index);
        }

        var deleteButton = document.createElement('button');
        deleteButton.textContent = "DELETE";
        deleteButton.onclick = function() {
            deleteTask(index);
            
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
    })
}

function getTeamFilter() {
    var teamDropper = document.getElementById('teams');
    return teamDropper.options[teamDropper.selectedIndex].text;
}
function getProjectFilter() {
    var projectDropper = document.getElementById('projects');
    return projectDropper.options[projectDropper.selectedIndex].text;
}
function getDeptFilter() {
    var deptDropper = document.getElementById('departments');
    return deptDropper.option[deptDropper.selectedIndex].text;
}
function getPriorityFilter() {
    var priorityDropper = document.getElementById('priority');
    return priorityDropper.option[priorityDropper.selectedIndex].text;
}
function getProgressFilter() {
    var progressDropper = document.getElementById('progress');
    return progressDropper.option[progressDropper.selectedIndex].text;
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