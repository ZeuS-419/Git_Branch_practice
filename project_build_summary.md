# Project Build Summary

## Current Status
- **Repository State**: Active on feature branch (`feature/add-task-modal` or new branch `feature/drag-and-drop`).
- **Current Milestone**: Lab 2 — HTML5 Drag-and-Drop Card Movement, Priority Pills, and Card Deletion.
- **Next Action**: User to review changes, commit, and practice branching/merging workflow.

---

## History & Milestones

### 2026-09-30 — Lab 2: Drag-and-Drop Movement & Priority Tags
- **Accomplished**:
  - Implemented HTML5 Drag-and-Drop system enabling intuitive card movement between columns (To Do, In Progress, Done).
  - Added glowing drop-target indicators (`.column.drag-over`) and active drag ghost styling (`.task-card.dragging`).
  - Added Priority categorization (High, Medium, Low) with glowing color pills and form select input.
  - Implemented card deletion button (`&times;`) with instant state filtering and counter re-calculation.
- **Modified Files**:
  - [index.html](file:///d:/Github%20Repos/Git_Branch_practice/index.html)
  - [style.css](file:///d:/Github%20Repos/Git_Branch_practice/style.css)
  - [app.js](file:///d:/Github%20Repos/Git_Branch_practice/app.js)
  - [project_build_summary.md](file:///d:/Github%20Repos/Git_Branch_practice/project_build_summary.md)
- **Current Overall State**:
  - Full interactive Kanban experience enabled; ready for next Git commit or feature branch practice.

### 2026-09-30 — Lab 1: Interactive New Task Modal Feature
- **Accomplished**:
  - Implemented "+ New Task" button with smooth gradient accent and hover micro-animations in the header.
  - Built an accessible modal overlay with form inputs (Task Title, Description, Column selector) with backdrop blur and enter transitions.
  - Implemented JavaScript handlers in [app.js](file:///d:/Github%20Repos/Git_Branch_practice/app.js) to append newly created tasks into state and dynamically re-render columns and counter badges.
- **Modified Files**:
  - [index.html](file:///d:/Github%20Repos/Git_Branch_practice/index.html)
  - [style.css](file:///d:/Github%20Repos/Git_Branch_practice/style.css)
  - [app.js](file:///d:/Github%20Repos/Git_Branch_practice/app.js)
  - [project_build_summary.md](file:///d:/Github%20Repos/Git_Branch_practice/project_build_summary.md)
- **Current Overall State**:
  - Feature implementation complete; ready for branch creation, atomic commit, remote push, and GitHub PR creation.

### 2026-09-30 — Baseline Kanban Board Architecture
- **Accomplished**:
  - Implemented initial baseline Kanban board structure (`index.html`, `style.css`, `app.js`, `README.md`).
  - Styled with high-contrast modern dark palette, responsive CSS grid, card status indicators, and column task counters.
  - Formulated step-by-step modular plan for future features via Git feature branches.
- **New Files**:
  - [index.html](file:///d:/Github%20Repos/Git_Branch_practice/index.html)
  - [style.css](file:///d:/Github%20Repos/Git_Branch_practice/style.css)
  - [app.js](file:///d:/Github%20Repos/Git_Branch_practice/app.js)
  - [README.md](file:///d:/Github%20Repos/Git_Branch_practice/README.md)
- **Design Decisions**:
  - Kept interactive task creation and drag-and-drop deferred so they can be built as feature branches and practice PRs.
- **Current Overall State**:
  - Baseline ready for initial Git commit and push to remote.

### 2026-09-30 — Git Branching & PR Practice Curriculum Design
- **Accomplished**:
  - Analyzed workspace directory and verified Git initialization status.
  - Designed an end-to-end 5-phase practical exercise flow covering local repo setup, feature branches, pushing upstream, raising Pull Requests on GitHub, merge conflict simulation & resolution, and branch cleanup.
  - Created practice guide artifact: `git_branching_and_pr_flowchart.md`.
- **New Files**:
  - `project_build_summary.md`
- **Design Decisions**:
  - Structure the practice around realistic feature workflows rather than dry commands.
  - Include both GitHub UI workflow (PRs) and local CLI workflow (merging, rebasing, conflict fixing).
