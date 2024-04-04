// JavaScript code (index.js)
const taskInput = document.getElementById('taskInput');
const descriptionInput = document.getElementById('descriptionInput');
const dateInput = document.getElementById('dateInput');
const activeTaskTable = document.getElementById('activeTaskTable').getElementsByTagName('tbody')[0];
const completedTaskTable = document.getElementById('completedTaskTable').getElementsByTagName('tbody')[0];

// Load tasks from local storage
const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
storedTasks.forEach(task => addTaskToTable(task, task.completed ? completedTaskTable : activeTaskTable));

function addTask() {
  const taskText = taskInput.value.trim();
  const descriptionText = descriptionInput.value.trim();
  const dateValue = dateInput.value;

  if (taskText !== '') {
    const task = { task: taskText, description: descriptionText, date: dateValue, completed: false };
    addTaskToTable(task, activeTaskTable);
    saveTasksToLocalStorage();
    taskInput.value = '';
    descriptionInput.value = '';
    dateInput.value = '';
  } else {
    alert('Please enter a task');
  }
}

function addTaskToTable(task, table) {
  const tr = document.createElement('tr');
  tr.innerHTML = `
    <td>${task.task}</td>
    <td>${task.description}</td>
    <td>${task.date}</td>
    <td>${task.completed ? 'Completed' : 'Active'}</td>
    <td>
      ${task.completed ? '' : '<button onclick="completeTask(this)">Mark Complete</button>'}
      <button onclick="removeTask(this)">Remove</button>
    </td>
  `;
  table.appendChild(tr);
}

function completeTask(button) {
  const tr = button.parentElement.parentElement;
  tr.cells[3].textContent = 'Completed';
  tr.querySelector('button').remove();
  const task = {
    task: tr.cells[0].textContent,
    description: tr.cells[1].textContent,
    date: tr.cells[2].textContent,
    completed: true
  };
  tr.remove();
  addTaskToTable(task, completedTaskTable);
  saveTasksToLocalStorage();
}

function removeTask(button) {
  const tr = button.parentElement.parentElement;
  tr.remove();
  saveTasksToLocalStorage();
}

function saveTasksToLocalStorage() {
  const tasks = [];
  activeTaskTable.childNodes.forEach(row => {
    tasks.push({ 
      task: row.cells[0].textContent, 
      description: row.cells[1].textContent, 
      date: row.cells[2].textContent, 
      completed: false 
    });
  });
  completedTaskTable.childNodes.forEach(row => {
    tasks.push({ 
      task: row.cells[0].textContent, 
      description: row.cells[1].textContent, 
      date: row.cells[2].textContent, 
      completed: true 
    });
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
