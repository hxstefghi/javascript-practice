let display = document.getElementById("display");
let taskInput = document.getElementById("taskInput");
let taskBtn = document.getElementById("addTaskBtn");
let error = document.getElementById("error");
let alphabetBtn = document.getElementById("alphabetBtn");
let clearTaskBtn = document.getElementById("clearTaskBtn");

let lists = [];

taskBtn.addEventListener("click", addTask);
taskInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});
alphabetBtn.addEventListener("click", sortAlphabetically);
clearTaskBtn.addEventListener("click", clearTask);
display.addEventListener("click", function (event) {
  console.log(event.target);

  if (event.target.tagName === "LI") {
    let index = event.target.dataset.index;

    lists[index].completed = !lists[index].completed;
    saveTask();
    displayTask();
  }
});

loadTasks();

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
  saveTask();

  // to clear the input after hitting the add button
  taskInput.value = "";

  clearError(error);
}

function displayTask() {
  let html = "";
  for (let i = 0; i < lists.length; i++) {
    if (lists[i].completed) {
      html += `<li class="line-through" data-index=${i}>${lists[i].task}<button onclick="deleteTask(${i})">delete</button></li>`;
    }

    if (!lists[i].completed) {
      html += `<li data-index=${i}>${lists[i].task}<button onclick="deleteTask(${i})">delete</button></li>`;
    }
  }

  html += "<ul>";

  return (display.innerHTML = html);
}

function deleteTask(index) {
  lists.splice(index, 1);

  displayTask();
  saveTask();
}

function displayError(el, message) {
  return (el.innerHTML = message);
}

function clearError(el) {
  return (el.innerHTML = "");
}

function sortAlphabetically() {
  lists.sort(function (a, b) {
    if (a.task < b.task) {
      return -1;
    }
  });
  displayTask();
}

function clearTask() {
  lists = [];
  saveTask();
  displayTask();
}

function saveTask() {
  return localStorage.setItem("tasks", JSON.stringify(lists));
}

function loadTasks() {
  let tasks = localStorage.getItem("tasks");
  let value = JSON.parse(tasks);
  lists = value;
  displayTask();
}
