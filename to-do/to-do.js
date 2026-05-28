let display = document.getElementById("display");
let taskInput = document.getElementById("taskInput");
let taskBtn = document.getElementById("addTaskBtn");
let error = document.getElementById("error");

const lists = [];

taskBtn.addEventListener("click", addTask);
taskInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});

function addTask() {
  let value = taskInput.value.trim();

  if (value === "") {
    return displayError(error, "The task input should not be empty!");
  }

  lists.push({
    task: value,
    completed: false,
  });

  displayTask();

  // to clear the input after hitting the add button
  taskInput.value = "";

  clearError(error);
}

function displayTask() {
  let html = "";
  for (let i = 0; i < lists.length; i++) {
    html += `<li>${lists[i].task}<button onclick="deleteTask(${i})">delete</button></li>`;
  }

  html += "<ul>";

  return (display.innerHTML = html);
}

function deleteTask(index) {
  lists.splice(index, 1);

  displayTask();
}

function displayError(el, message) {
  return (el.innerHTML = message);
}

function clearError(el) {
  return (el.innerHTML = "");
}
