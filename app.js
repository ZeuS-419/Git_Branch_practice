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

function renderTasks(tasks) {
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
        <span class="task-date">⏱️ Today</span>
      </div>
    `;

    targetList.appendChild(card);
  });

  // Empty state handling
  Object.keys(lists).forEach(status => {
    if (statusTally[status] === 0 && lists[status]) {
      lists[status].innerHTML = `<div class="empty-state">No tasks in this stage</div>`;
    }
  });

  // Update counter badges
  Object.keys(counts).forEach(status => {
    if (counts[status]) {
      counts[status].textContent = statusTally[status] || 0;
    }
  });
}

// Initial Boot
document.addEventListener("DOMContentLoaded", () => {
  renderTasks(initialTasks);
});
