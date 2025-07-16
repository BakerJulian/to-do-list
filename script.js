const tasks = [];
const button = document.getElementById("inputButton");
const input = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

button.addEventListener("click", addTask);

function addTask() {
  const taskText = input.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  tasks.push(taskText);

  const li = document.createElement("li");
  li.textContent = taskText;
  li.style.padding = "10px";

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "❌";
  deleteBtn.style.marginLeft = "10px";
  deleteBtn.style.cursor = "pointer";

  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(deleteBtn);

  li.addEventListener("click", (e) => {
    if (e.target !== deleteBtn) {
      li.classList.toggle("completed");
    }
  });

  li.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    li.remove();
  });

  taskList.appendChild(li);

  input.value = "";
}
