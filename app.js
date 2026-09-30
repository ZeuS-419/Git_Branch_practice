// Initial Starter Tasks with Priority
const initialTasks = [
  {
    id: "TASK-101",
    title: "Setup Git Repository Baseline",
    description: "Initialize git repository and establish main branch structure.",
    status: "done",
    priority: "high"
  },
  {
    id: "TASK-102",
    title: "Create Feature Branch for Task Creation",
    description: "Implement a modal to allow users to add new cards dynamically.",
    status: "in-progress",
    priority: "medium"
  },
  {
    id: "TASK-103",
    title: "Add Drag-and-Drop Card Movement",
    description: "Support HTML5 drag & drop to transition cards between columns.",
    status: "todo",
    priority: "high"
  },
  {
    id: "TASK-104",
    title: "Practice Merge Conflict Drill",
    description: "Simulate concurrent branch updates on card priority badges.",
    status: "todo",
    priority: "low"
  }
];

// In-memory Task State
let tasks = [...initialTasks];
let draggedTaskId = null;

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
    card.setAttribute("draggable", "true");

    const priorityBadge = task.priority 
      ? `<span class="priority-badge priority-${task.priority}">${task.priority}</span>` 
      : "";

    card.innerHTML = `
      <div class="task-card-header">
        <h3>${task.title}</h3>
        <button class="btn-delete-card" data-delete-id="${task.id}" title="Delete task" aria-label="Delete task">&times;</button>
      </div>
      <p>${task.description}</p>
      <div class="task-card-footer">
        <span class="task-id">${task.id}</span>
        ${priorityBadge}
      </div>
    `;

    // Drag events for card
    card.addEventListener("dragstart", (e) => {
      draggedTaskId = task.id;
      card.classList.add("dragging");
      e.dataTransfer.setData("text/plain", task.id);
      e.dataTransfer.effectAllowed = "move";
    });

    card.addEventListener("dragend", () => {
      card.classList.remove("dragging");
      draggedTaskId = null;
      document.querySelectorAll(".column").forEach(col => col.classList.remove("drag-over"));
    });

    targetList.appendChild(card);
  });

  // Update counter badges
  Object.keys(counts).forEach(status => {
    if (counts[status]) {
      counts[status].textContent = statusTally[status] || 0;
    }
  });
}

function initDragAndDrop() {
  const columns = document.querySelectorAll(".column");

  columns.forEach(column => {
    column.addEventListener("dragover", (e) => {
      e.preventDefault();
      e.dataTransfer.dropEffect = "move";
      column.classList.add("drag-over");
    });

    column.addEventListener("dragleave", (e) => {
      // Only remove if leaving the column itself
      if (!column.contains(e.relatedTarget)) {
        column.classList.remove("drag-over");
      }
    });

    column.addEventListener("drop", (e) => {
      e.preventDefault();
      column.classList.remove("drag-over");

      const targetStatus = column.getAttribute("data-status");
      const taskId = e.dataTransfer.getData("text/plain") || draggedTaskId;

      if (!taskId || !targetStatus) return;

      const task = tasks.find(t => t.id === taskId);
      if (task && task.status !== targetStatus) {
        task.status = targetStatus;
        renderTasks();
      }
    });
  });
}

function initDeleteHandler() {
  const board = document.getElementById("kanban-board");
  board?.addEventListener("click", (e) => {
    const deleteBtn = e.target.closest(".btn-delete-card");
    if (!deleteBtn) return;

    const taskId = deleteBtn.getAttribute("data-delete-id");
    if (!taskId) return;

    tasks = tasks.filter(t => t.id !== taskId);
    renderTasks();
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
    const priority = document.getElementById("task-priority")?.value || "medium";

    if (!title) return;

    const newTask = {
      id: `TASK-${Math.floor(1000 + Math.random() * 9000)}`,
      title,
      description: description || "No description provided.",
      status,
      priority
    };

    tasks.push(newTask);
    renderTasks();
    closeModal();
  });
}

// Initial Boot
document.addEventListener("DOMContentLoaded", () => {
  renderTasks();
  initDragAndDrop();
  initDeleteHandler();
  initModalHandlers();
});
