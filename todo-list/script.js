// This event listener ensures that when the page loads, it retrieves and displays saved tasks from local storage.
document.addEventListener("DOMContentLoaded", loadTasks);

// Function to add a new task to the list and save it to localStorage
function addTask() {
    // Get the value of the task input field
    let taskInput = document.getElementById("taskInput");
    let taskValue = taskInput.value.trim(); // Trim removes extra spaces from input

    // If the input is empty, alert the user
    if (taskValue === "") {
        alert("Please enter a task!");
        return;
    }

    // Create a new list item (li) for the task
    let taskList = document.getElementById("taskList");
    let li = document.createElement("li");
    
    // Set the content of the list item to be the task, plus a delete button
    li.innerHTML = `${taskValue} <button class="delete-btn" onclick="deleteTask(this)">X</button>`;
    
    // Append the new task to the task list
    taskList.appendChild(li);

    // Save the task to local storage
    saveTask(taskValue);

    // Clear the input field for the next task
    taskInput.value = "";
}

// Function to delete a task
function deleteTask(button) {
    // Get the list item (li) of the clicked delete button
    let li = button.parentElement;
    
    // Get the task text value (without the 'X')
    let taskValue = li.textContent.replace("X", "").trim();
    
    // Remove the task from the list
    li.remove();
    
    // Remove the task from local storage
    removeTask(taskValue);
}

// Function to save a new task to localStorage
function saveTask(task) {
    // Get the current tasks from local storage (or an empty array if none exist)
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    
    // Add the new task to the list of tasks
    tasks.push(task);
    
    // Save the updated tasks back to local storage
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Function to load tasks from localStorage and display them when the page loads
function loadTasks() {
    // Get the saved tasks from localStorage
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    
    // Get the task list element
    let taskList = document.getElementById("taskList");

    // For each task, create a list item (li) and add it to the task list
    tasks.forEach(task => {
        let li = document.createElement("li");
        li.innerHTML = `${task} <button class="delete-btn" onclick="deleteTask(this)">X</button>`;
        taskList.appendChild(li);
    });
}

// Function to remove a task from localStorage
function removeTask(task) {
    // Get the current tasks from localStorage
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    
    // Filter out the task that needs to be removed
    tasks = tasks.filter(t => t !== task);
    
    // Save the updated list of tasks back to localStorage
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
