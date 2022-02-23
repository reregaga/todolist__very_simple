const field = document.querySelector('.field');
const button = document.querySelector('.add');
const list = document.querySelector('.list');

function createTask(value){
    const task = document.createElement('DIV');
    const taskText = document.createElement('SPAN');
    const taskCheckbox = document.createElement('INPUT');

    task.classList.add('style-for-task');
    taskText.textContent = value;
    taskCheckbox.setAttribute('type', 'checkbox');

    taskCheckbox.addEventListener('click', completeTask);

    task.append(taskCheckbox);
    task.append(taskText);

    return task;
}

function addTask(){
    if(field.value) {
        const newTask = createTask(field.value);
        list.append(newTask);
        field.value = '';
    }
}

function completeTask(event){
    const target = event.target;

    if(target.checked) target.parentElement.classList.add('success');
    else               target.parentElement.classList.remove('success');
}

button.addEventListener('click', addTask);
