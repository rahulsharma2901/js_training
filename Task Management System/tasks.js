let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function createTask() {
    var titleInput = document.getElementById('title').value;
    var descriptionInput = document.getElementById('description').value;
    var dueDateInput = document.getElementById('dueDate').value;
    var priorityInput = document.getElementById('priorities').value;
    var teamSelection = document.getElementById('teamSelection').value;
    var projectInput = document.getElementById('projectList').value;
    var departmentsList = document.getElementById('departmentsList').value;
    var progressLevel = document.getElementById('progressLevelList').value;
    var individualInput = document.getElementById('individual').value;
    var output = document.getElementById('output');

    let errorTitle = document.getElementById("errorTitle")
    let errorDes = document.getElementById("errorDes")
    let errorDate = document.getElementById("errorDate");
    let errorPri = document.getElementById('errorPri');
    let errorTeam = document.getElementById('errorTeam');
    let errorProject = document.getElementById('errorProject');
    let errorDep = document.getElementById('errorDep');
    let errorProgress = document.getElementById('errorProgress');

    if (titleInput.trim() !== '' && descriptionInput.trim() !== '' && dueDateInput.trim() !== '' && priorityInput.trim() !== '' && teamSelection.trim() !== '' && individualInput.trim() !== '') {

        var task = {
            title: titleInput,
            description: descriptionInput,
            dueDate: dueDateInput,
            priority: priorityInput,
            teams: teamSelection,
            project: projectInput,
            department: departmentsList,
            progress: progressLevel,
            individual: individualInput
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

        var individualElement = document.createElement('p');
        individualElement.textContent = "Employee Name: " + individualInput;

        boxElement.appendChild(titleElement);
        boxElement.appendChild(descriptionElement);
        boxElement.appendChild(dueElement);
        boxElement.appendChild(priority);
        boxElement.appendChild(teams);
        boxElement.appendChild(projects);
        boxElement.appendChild(departments);
        boxElement.appendChild(progress);
        boxElement.appendChild(individualElement);

        saveTask(task);

        var editButton = document.createElement('button');
        editButton.textContent = 'EDIT';


        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'DELETE';

        listItem.appendChild(boxElement);

        output.appendChild(listItem);

        var buttonContainer = document.createElement('div');
        buttonContainer.classList.add('box-buttons');

        buttonContainer.appendChild(editButton);
        buttonContainer.appendChild(deleteButton);

        boxElement.appendChild(buttonContainer);
        
        resetInput();
        loadTasks();
    }
    else {
        if (titleInput.trim() === '') {
            errorTitle.innerHTML = "*Enter title!"
        } else { errorTitle.innerHTML = '' }
        if (descriptionInput.trim() === '') {
            errorDes.innerHTML = "*Enter Description!"
        } else { errorDes.innerHTML = '' }
        if (dueDateInput.trim() === '') {
            errorDate.innerHTML = "*Enter valid date!"
        } else { errorDate.innerHTML = '' }
        if (priorityInput.trim() === 'priorityLevel') {
            errorPri.innerHTML = "*Select priority!"
        } else { errorPri.innerHTML = '' }
        if (teamSelection.trim() === 'teams') {
            errorTeam.innerHTML = "*Select team!"
        } else { errorTeam.innerHTML = '' }
        if (projectInput.trim() === 'projects') {
            errorProject.innerHTML = "*Select project!"
        } else { errorProject.innerHTML = '' }
        if (departmentsList.trim() === 'departments') {
            errorDep.innerHTML = '*Select department!';
        } else { errorDep.innerHTML = '' }
        if (progressLevel.trim() === 'progressLevel') {
            errorProgress.innerHTML = "*Select progress level!";
        } else { errorProgress.innerHTML = '' }
    }
}

function editTask(index) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    var task = tasks[index];
    
    console.log('my taskss--', task);

    if (task) {
        document.getElementById('title').value = task.title;
        document.getElementById('description').value = task.description;
        document.getElementById('dueDate').value = task.dueDate;
        document.getElementById('priorities').value = task.priority;
        document.getElementById('teamSelection').value = task.teams;
        document.getElementById('projectList').value = task.project;
        document.getElementById('departmentsList').value = task.department;
        document.getElementById('progressLevelList').value = task.progress;
        document.getElementById('individual').value = task.individual;

        var editTaskButton = document.getElementById('editTaskButton');

        editTaskButton.onclick = function () {
            var editedTask = {
                title: document.getElementById('title').value,
                description: document.getElementById('description').value,
                dueDate: document.getElementById('dueDate').value,
                priority: document.getElementById('priorities').value,
                teams: document.getElementById('teamSelection').value,
                project: document.getElementById('projectList').value,
                department: document.getElementById('departmentsList').value,
                progress: document.getElementById('progressLevelList').value,
                individual: document.getElementById('individual').value
            };
            document.getElementById('addTaskButton').style.visibility = "visible";
            document.getElementById('editTaskButton').style.visibility = "hidden";

            tasks[index] = editedTask;

            localStorage.setItem('tasks', JSON.stringify(tasks));
            
            console.log("Edittask----", editedTask);
            console.log("my index", index);
            
            resetInput();
            loadTasks();
        }
    }
}

function saveTask(task) {
    var existingTasks = localStorage.getItem('tasks');
    var tasks = existingTasks ? JSON.parse(existingTasks) : [];

    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
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

        var individualElement = document.createElement('p');
        individualElement.textContent = "Employee Name: " + task.individual;

        boxElement.appendChild(titleElement);
        boxElement.appendChild(descriptionElement);
        boxElement.appendChild(dueElement);
        boxElement.appendChild(priority);
        boxElement.appendChild(teams);
        boxElement.appendChild(projects);
        boxElement.appendChild(departments);
        boxElement.appendChild(progress);
        boxElement.appendChild(individualElement);

        var editButton = document.createElement('button');
        editButton.textContent = "EDIT";
        editButton.id = `editButton-${index}`;
        editButton.onclick = function () {
            editTask(index);
            console.log("Task to be edited at index: ", index);
            document.getElementById('addTaskButton').style.visibility = "hidden";
            document.getElementById('editTaskButton').style.visibility = "visible"
        }

        var deleteButton = document.createElement('button');
        deleteButton.textContent = "DELETE";
        deleteButton.onclick = function () {
            deleteTask(index);
        }

        listItem.appendChild(boxElement);

        output.appendChild(listItem);

        var buttonContainer = document.createElement('div');
        buttonContainer.classList.add('box-buttons');

        buttonContainer.appendChild(editButton);
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
        document.getElementById('individual').value = '';
    });
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

function deleteTask(taskIndex) {
    tasks.splice(taskIndex, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    loadTasks();
}

function resetInput() {
    document.getElementById('title').value = '';
    document.getElementById('description').value = '';
    document.getElementById('dueDate').value = '';
    document.getElementById('priorities').value = 'priorityLevel';
    document.getElementById('teamSelection').value = 'teams';
    document.getElementById('projectList').value = 'projects';
    document.getElementById('departmentsList').value = 'departments';
    document.getElementById('progressLevelList').value = 'progressLevel';
    document.getElementById('individual').value = '';
}

window.onload = loadTasks;