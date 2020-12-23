var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

//Function to add a new task
var createTaskHandler = function(event) {
    event.preventDefault();

    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task";
    tasksToDoEl.appendChild(listItemEl);
    };
//Button clicked to execute taskhandler function
formEl.addEventListener("submit", createTaskHandler);