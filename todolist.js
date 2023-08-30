let todoApp = document.getElementById("todo-list");

let todoList = [];

let number = 0;
function handleAddBtn() {
  let task = { id: "", title: "", todoStatus: "", deadline: "" };
  task.id = number;
  task.title = document.getElementById("todo-input").value;
  task.todoStatus = document.getElementById("todo-status").value;
  task.deadline = document.getElementById("todo-deadline").value;
  if (task.title == "" || task.todoStatus == "" || task.deadline == "") {
    alert("Please complete all information");
  } else if (validateDeadline(task.deadline)) {
    todoList.push(task);
    handleFilterTask();
    number++;
    document.getElementById("todo-input").value = "";
  }
  setInterval(() => {
    if (todoList !== null) {
      checkDue();
    }
  }, 1000);
}

function validateDeadline(deadline) {
  const dateToCompare = new Date(deadline);
  var now = new Date();

  if (isNaN(dateToCompare.getTime()) || dateToCompare <= now) {
    alert("Please select a date AND time in the future.");
    return false;
  }
  return true;
}

let addBtn = document.getElementById("add-btn");
addBtn.addEventListener("click", handleAddBtn);

function showTodoList() {
  todoApp.innerHTML = "";
  todoList.filter((item) => {
    if (item.todoStatus == taskFilter.value) {
      renderTask(item);
    }
  });
}

// function renderTask({ id, title, todoStatus, deadline }) {
//   let newTodo = document.createElement("li");
//   newTodo.className = "task";
//   newTodo.id = "task-" + id;

//   let taskName = document.createElement("div");
//   taskName.className = "task-name";
//   taskName.id = "task-name-" + id;
//   taskName.setAttribute("data-id", id);
//   taskName.textContent = title;
//   taskName.disabled = true;
//   newTodo.appendChild(taskName);

//   let taskInfo = document.createElement("div");
//   taskInfo.className = "task-info";

//   let taskStatus = document.createElement("div");
//   taskStatus.className = "task-status";
//   taskStatus.textContent = todoStatus;
//   taskInfo.appendChild(taskStatus);

//   let taskDeadline = document.createElement("div");
//   taskDeadline.className = "task-deadline";
//   taskDeadline.textContent = deadline;
//   taskInfo.appendChild(taskDeadline);

//   newTodo.appendChild(taskInfo);

//   let span = document.createElement("span");
//   span.className = "options";
//   let iconEdit = document.createElement("button");
//   let iconDelete = document.createElement("button");
//   iconEdit.className = "btn edit-btn";
//   iconDelete.className = "btn delete-btn";
//   iconEdit.addEventListener("click", handleEditIconClicked);
//   iconDelete.addEventListener("click", handleDeleteBtn);
//   iconEdit.setAttribute("data-id", id);
//   iconDelete.setAttribute("data-id", id);
//   iconEdit.innerHTML = '<i class= "fa fa-edit" data-id= ' + id + "></i>";
//   iconDelete.innerHTML = '<i class= "fa fa-trash" data-id= ' + id + "></i>";
//   span.appendChild(iconEdit);
//   span.appendChild(iconDelete);
//   newTodo.appendChild(span);

//   todoApp.appendChild(newTodo);
// }

function renderTask({ id, title, todoStatus, deadline }) {
  let task = document.createElement("li");
  task.innerHTML =
    `
  <div class="task" id="task-` +
    id +
    `">
  <div class="task-name" id="task-name-` +
    id +
    `" data-id="` +
    id +
    `">` +
    title +
    `
  <div class="task-info">
    <div class="task-status">` +
    todoStatus +
    `</div>
    <div class="task-deadline">` +
    deadline +
    `</div>
  </div>
  <span class="options">
    <button class="btn edit-btn" data-id="` +
    id +
    `" id="edit-btn-` +
    id +
    `">
    <i class= "fa fa-edit" data-id="` +
    id +
    `"></i>
    </button>
    <button class="btn delete-btn" data-id="` +
    id +
    `" id="delete-btn-` +
    id +
    `">
    <i class= "fa fa-trash" data-id="` +
    id +
    `"></i>
    </button>
  </span>
  </div>
  </div>
`;
  todoApp.appendChild(task);
  let iconEdit = document.getElementById("edit-btn-" + id);
  let iconDelete = document.getElementById("delete-btn-" + id);
  iconEdit.addEventListener("click", handleEditIconClicked);
  iconDelete.addEventListener("click", handleDeleteBtn);
}

let currentTaskId;
function handleEditIconClicked(event) {
  addBtn.disabled = true;
  let button = event.target;
  currentTaskId = parseInt(button.dataset.id);
  let getIndex = todoList.map((object) => object.id).indexOf(currentTaskId);
  let task = todoList[getIndex];

  document.getElementById("todo-input").value = task.title;
  document.getElementById("todo-status").value = task.todoStatus;
  document.getElementById("todo-deadline").value = task.deadline;
}

let editBtn = document.getElementById("edit-btn");
editBtn.addEventListener("click", handleEditBtn);
function handleEditBtn() {
  let getIndex = todoList.map((object) => object.id).indexOf(currentTaskId);
  let task = todoList[getIndex];
  task.title = document.getElementById("todo-input").value;
  task.todoStatus = document.getElementById("todo-status").value;
  task.deadline = document.getElementById("todo-deadline").value;
  showTodoList();
  document.getElementById("todo-input").value = "";
  currentTaskId = -1;
  addBtn.disabled = false;
}

function handleDeleteBtn(event) {
  let id = parseInt(event.target.dataset.id);
  if (id === currentTaskId) {
    alert("You delete a task which is adjusting! Finish adjusting first!");
  } else {
    let getIndex = todoList.map((object) => object.id).indexOf(id);
    todoList.splice(getIndex, 1);
    showTodoList();
  }
}

let taskFilter = document.getElementById("select-task-filter");
taskFilter.addEventListener("change", handleFilterTask);
function handleFilterTask() {
  showTodoList();
}

function checkDue() {
  var now = new Date();
  todoList.forEach((object) => {
    var dateToCompare = new Date(object.deadline);

    if (isNaN(dateToCompare.getTime()) || dateToCompare <= now) {
      changeDisplayDueTask(object.id);
    }
  });
}

function changeDisplayDueTask(id) {
  var task = document.getElementById("task-" + id);
  task.style.backgroundColor = "yellow";
  var taskName = document.getElementById("task-name-" + id);
  taskName.style.backgroundColor = "#yellow";
}
