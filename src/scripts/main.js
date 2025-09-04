dcument.addEventListener('DOMContentLoaded', function() {
    const taskForm = document.querySelector('.taskForm');
    const taskInput = document.getElementById('taskImput');
    const taskList = document.getElementById('taskList');

    // Handle form submission
    taskForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const taskText = taskInput.value.trim();
        if (taskText) {
            addTask(taskText);
            taskInput.value = '';
            taskInput.focus();
        }
    });

    // Add task to the list
    function addTask(taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;

        // Add remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remover';
        removeBtn.className = 'remove-btn';
        removeBtn.onclick = function() {
            li.remove();
        };

        li.appendChild(removeBtn);
        taskList.appendChild(li);
    }
})