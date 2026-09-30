// Initial Starter Tasks for Baseline
const initialTasks = [
  {
    id: "TASK-101",
    title: "Setup Git Repository Baseline",
    description: "Initialize git repository and establish main branch structure.",
    status: "done"
  },
  {
    id: "TASK-102",
    title: "Create Feature Branch for Task Creation",
    description: "Implement a modal to allow users to add new cards dynamically.",
    status: "in-progress"
  },
  {
    id: "TASK-103",
    title: "Add Drag-and-Drop Card Movement",
    description: "Support HTML5 drag & drop to transition cards between columns.",
    status: "todo"
  },
  {
    id: "TASK-104",
    title: "Practice Merge Conflict Drill",
    description: "Simulate concurrent branch updates on card priority badges.",
    status: "todo"
  }
];

// In-memory Task State
let tasks = [...initialTasks];

function renderTasks() {
  const lists = {
    todo: document.getElementById("list-todo"),
    "in-progress": document.getElementById("list-in-progress"),
    done: document.getElementById("list-done")
  };

  const counts = {
    todo: document.getElementById("count-todo"),
    "in-progress": document.getElementById("count-in-progress"),
    done: document.getElementById("count-done")
  };

  // Reset columns
  Object.values(lists).forEach(list => { if (list) list.innerHTML = ""; });

  const statusTally = { todo: 0, "in-progress": 0, done: 0 };

  tasks.forEach(task => {
    const targetList = lists[task.status];
    if (!targetList) return;

    statusTally[task.status] = (statusTally[task.status] || 0) + 1;

    const card = document.createElement("article");
    card.className = "task-card";
    card.setAttribute("data-id", task.id);

    card.innerHTML = `
      <h3>${task.title}</h3>
      <p>${task.description}</p>
      <div class="task-card-footer">
        <span class="task-id">${task.id}</span>
      </div>
    `;

    targetList.appendChild(card);
  });

  // Update counter badges
  Object.keys(counts).forEach(status => {
    if (counts[status]) {
      counts[status].textContent = statusTally[status] || 0;
    }
  });
}

function initModalHandlers() {
  const modal = document.getElementById("modal-new-task");
  const btnOpen = document.getElementById("btn-open-modal");
  const btnClose = document.getElementById("btn-close-modal");
  const btnCancel = document.getElementById("btn-cancel-task");
  const form = document.getElementById("form-new-task");

  const openModal = () => {
    modal.removeAttribute("hidden");
    document.getElementById("task-title").focus();
  };

  const closeModal = () => {
    modal.setAttribute("hidden", "");
    form.reset();
  };

  btnOpen?.addEventListener("click", openModal);
  btnClose?.addEventListener("click", closeModal);
  btnCancel?.addEventListener("click", closeModal);

  // Close when clicking on backdrop outside modal content
  modal?.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  // Form submit handler
  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = document.getElementById("task-title").value.trim();
    const description = document.getElementById("task-desc").value.trim();
    const status = document.getElementById("task-status").value;

    if (!title) return;

    const newTask = {
      id: `TASK-${Math.floor(1000 + Math.random() * 9000)}`,
      title,
      description: description || "No description provided.",
      status
    };

    tasks.push(newTask);
    renderTasks();
    closeModal();
  });
}

// Initial Boot
document.addEventListener("DOMContentLoaded", () => {
  renderTasks();
  initModalHandlers();
});

