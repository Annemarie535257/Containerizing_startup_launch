const taskInput = document.getElementById('taskInput');
const descriptionInput = document.getElementById('descriptionInput');
const taskList = document.getElementById('taskList');

function addTask() {
  const taskText = taskInput.value.trim();
  const descriptionText = descriptionInput.value.trim();
  if (taskText !== '') {
    const li = document.createElement('li');
    li.classList.add('task-item');
    li.innerHTML = `
      <input type="checkbox" onchange="toggleTaskCompletion(this)">
      <span>${taskText}</span>
      <p>${descriptionText}</p>
      <button onclick="removeTask(this)">Remove</button>
    `;
    taskList.appendChild(li);
    taskInput.value = '';
    descriptionInput.value = '';
  } else {
    alert('Please enter a task');
  }
}

function toggleTaskCompletion(checkbox) {
  const taskText = checkbox.nextElementSibling;
  const descriptionText = taskText.nextElementSibling;
  if (checkbox.checked) {
    taskText.classList.add('completed');
    descriptionText.classList.add('completed');
  } else {
    taskText.classList.remove('completed');
    descriptionText.classList.remove('completed');
  }
}


function removeTask(button) {
  const li = button.parentElement;
  li.remove();
}
