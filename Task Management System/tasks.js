function createTask() {
    var titleInput = document.getElementById('title').value;
    var descriptionInput = document.getElementById('description').value;
    var dueDate = document.getElementById('dueDate').value;
    var priorityInput = document.getElementById('priorities').value;
    var teamSelection = document.getElementById('teamSelection').value;
    var projectInput = document.getElementById('projectList').value;
    var departmentsList = document.getElementById('departmentsList').value;
    var progressLevel = document.getElementById('progressLevelList').value;
    var output = document.getElementById('output');

    if (titleInput.trim() !== '' && descriptionInput.trim() !== '' && dueDate.trim() !== '' && priorityInput.trim() !== '' && teamSelection.trim() !== ''){
        var listItem = document.createElement('li');

        var boxElement = document.createElement('div');
        boxElement.classList.add('output-box');
        
        var titleElement = document.createElement('h4');
        titleElement.textContent = titleInput;

        var descriptionElement = document.createElement('p');
        descriptionElement.textContent = descriptionInput;

        var dueElement = document.createElement('p');
        dueElement.textContent = "Due Date: " + dueDate;

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

        listItem.appendChild(boxElement);

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
            projects.contentEditable = true;
            departments.contentEditable = true;
            progress.contentEditable = true;

            saveButton.style.display = 'none';
            editButton.style.display = 'inline-block'
        }

        var deleteButton = document.createElement('button');
        deleteButton.textContent = "Delete";
        deleteButton.onclick = function() {
            listItem.remove();
        };

        var buttonContainer = document.createElement('div');
        buttonContainer.classList.add('box-buttons');

        buttonContainer.appendChild(editButton);
        buttonContainer.appendChild(saveButton);
        buttonContainer.appendChild(deleteButton);
        boxElement.appendChild(buttonContainer);
        output.appendChild(listItem);

        document.getElementById('title').value = '';
        document.getElementById('description').value = '';
        document.getElementById('dueInput').value = '';
        document.getElementById('priorities').value = '--Add Priority';
        document.getElementById('teamSelection').value = '--Team Name';
        document.getElementById('projectList').value = '--Project Name';
        document.getElementById('departmentsList').value = '--Department Name';
        document.getElementById('progressLevelList').value = '--Progress Level';
    }
}