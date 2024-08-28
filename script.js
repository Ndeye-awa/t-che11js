const taskInput = document.getElementById('taskInput');
const ajoutTaskBtn = document.getElementById('ajoutTaskBtn');
const taskList = document.getElementById('taskList');

function ajoutTask() {
    const taskText = taskInput.value.trim();

    if(taskText != '') {
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center bg-danger'; 
        li.textContent = taskText;

        const buttonContainer = document.createElement('div');

        const todoBtn = document.createElement('button');
        todoBtn.className = 'btn btn-outline-light btn-sm mr-1';
        todoBtn.textContent = 'To Do';
        todoBtn.onclick = () => li.className = 'list-group-item d-flex justify-content-between align-items-center bg-danger';

        const doingBtn = document.createElement('button');
        doingBtn.className = 'btn btn-outline-warning btn-sm mr-1';
        doingBtn.textContent = 'Doing';
        doingBtn.onclick = () => li.className = 'list-group-item d-flex justify-content-between align-items-center bg-warning';

        const doneBtn = document.createElement('button');
        doneBtn.className = 'btn btn-outline-success btn-sm';
        doneBtn.textContent = 'Done';
        doneBtn.onclick = () => li.className = 'list-group-item d-flex justify-content-between align-items-center bg-success';

        buttonContainer.appendChild(todoBtn);
        buttonContainer.appendChild(doingBtn);
        buttonContainer.appendChild(doneBtn);

        li.appendChild(buttonContainer);

        taskList.appendChild(li);

        taskInput.value = '';
    }
}

ajoutTaskBtn.addEventListener('click', ajoutTask);

taskInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        ajoutTask();
    }
});