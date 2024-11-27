/* CONSTENTS */
const STATUS = {
  active: "ACTIVE",
  inProgress: "IN PROGRESS",
  completed: "COMPLETED",
};

/* elements variables */
const taskTitle = document.getElementById("task_title");
const taskDescription = document.getElementById("task_description");
const taskDate = document.getElementById("end_date");
const submit_btn = document.getElementById("submit_btn");
const activeTasksContainer = document.querySelector(".todos_active");

let tasks;
let taskId;

/* Disbale/Enable submit button */
taskTitle.addEventListener("input", (event) => {
  if (event.target.value.trim()) {
    submit_btn.disabled = false;
    submit_btn.style.backgroundColor = "#dc4b3e";
  } else {
    submit_btn.disabled = true;
  }
});

// Initialize storage when the script runs
const initializeTasks = () => {
  if (!localStorage.getItem("tasks")) {
    localStorage.setItem("tasks", JSON.stringify([]));
    localStorage.setItem("taskIdCounter", 1);
  }
  tasks = JSON.parse(localStorage.getItem("tasks"));
  taskId = localStorage.getItem("taskIdCounter");
};
initializeTasks();

/* Function for create a tasks */
const createTask = () => {
  if (taskTitle.value) {
    const createdTask = {
      id: taskId,
      title: taskTitle.value,
      description: taskDescription.value,
      deadline: taskDate.value,
      status: STATUS.active,
    };
    tasks.push(createdTask);
    taskId++;
    localStorage.setItem("tasks", JSON.stringify(tasks));
    localStorage.setItem("taskIdCounter", taskId);
  }
};

/* Render task list */

const renderTask = () => {
  if (tasks.length < 0) {
    const noDataText = document.createElement("p");
    noDataText.textContent = "NO Active Task";
    return activeTasksContainer.appendChild(noDataText);
  }

  // clear previous task to avoid duplicate rendering
  activeTasksContainer.innerHTML = "";

  const activeLabel = document.createElement("p");
  activeLabel.textContent = "Active";
  activeTasksContainer.appendChild(activeLabel);

  tasks.forEach((task) => {
    const activeDiv = document.createElement("div");
    activeDiv.classList.add("todos_info");
    activeDiv.setAttribute("draggable", "true");

    // create title , description and date elements
    const title = document.createElement("span");
    title.textContent = task.title;

    const description = document.createElement("p");
    description.textContent = task.description;

    const deadline = document.createElement("p");
    const formatDate = new Date(task.deadline);
    deadline.textContent = formatDate.toLocaleTimeString("en-US");

    // Append title, description, and date
    activeDiv.appendChild(title);
    activeDiv.appendChild(description);
    activeDiv.appendChild(deadline);

    // Append the activeDiv div to the parentDiv
    activeTasksContainer.appendChild(activeDiv);
  });
};

renderTask();
