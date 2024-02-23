let taskCounter = 3

document.getElementById("add").addEventListener("click", addTask);

let removeButtons = document.getElementsByClassName('remove');
for (let i = 0; i < removeButtons.length; i++) {
    removeButtons[i].addEventListener("click", removeTask);
}

function addTask() {
    ++taskCounter
    let taskList = document.getElementById('taskList');
    let newTask = document.createElement('li');
    newTask.innerHTML = 'Task'+taskCounter+'<input type="button" value="remove" class="remove">';
    taskList.appendChild(newTask);
}

function removeTask() {
    let listItem = this.parentNode;
    --taskCounter;
    let taskList = document.getElementById('taskList');
    taskList.removeChild(listItem);
}