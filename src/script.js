// Dark mode toggle
const themeToggle = document.getElementById("theme-toggle");
const html = document.documentElement;

themeToggle.addEventListener("click", () => {
  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    localStorage.setItem("theme", "light");
    themeToggle.textContent = "🌙"; // Dark mode icon
  } else {
    html.classList.add("dark");
    localStorage.setItem("theme", "dark");
    themeToggle.textContent = "☀️"; // Light mode icon
  }
});

// Load theme from local storage
if (localStorage.getItem("theme") === "dark") {
  html.classList.add("dark");
  themeToggle.textContent = "☀️"; // Light mode icon for dark mode
}

// To-Do List functionality
document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("task-input");
  const addTaskButton = document.getElementById("add-task");
  const taskList = document.getElementById("task-list"); // Make sure to add .task-list class in your HTML

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  // Load tasks from localStorage
  tasks.forEach((task) => loadTask(task));

  addTaskButton.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const task = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };

    tasks.push(task);
    saveTasks();
    loadTask(task);
    taskInput.value = ""; // Clear input after adding
  });

  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  function loadTask(task) {
    const taskElement = document.createElement("li");
    taskElement.classList.add(
      "flex",
      "items-center",
      "justify-between",
      "bg-white/50",
      "dark:bg-gray-700",
      "backdrop-blur",
      "p-4",
      "rounded-lg",
      "shadow"
    );
    taskElement.innerHTML = `
      <input type="checkbox" class="task-checkbox mr-2" ${
        task.completed ? "checked" : ""
      }>
      <span class="text-gray-800 dark:text-gray-200">${task.text}</span>
      <button class="text-red-500 hover:text-red-700">Delete</button>
    `;

    // Toggle completed state for each task
    taskElement
      .querySelector(".task-checkbox")
      .addEventListener("change", () => {
        const checkbox = taskElement.querySelector(".task-checkbox");
        task.completed = checkbox.checked;
        checkbox.nextElementSibling.classList.toggle(
          "line-through",
          task.completed
        );
        checkbox.nextElementSibling.classList.toggle(
          "text-gray-400",
          task.completed
        );
        saveTasks(); // Save task state in localStorage
      });

    // Handle delete task
    taskElement.querySelector("button").addEventListener("click", () => {
      tasks = tasks.filter((t) => t.id !== task.id);
      saveTasks(); // Save task state after deletion
      taskElement.remove();
    });

    taskList.appendChild(taskElement);
  }
});
