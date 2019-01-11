import formLoader from "./form";
import headerMaker from "./headerMaker";

function projectMaker(parentNode = document.createElement("div")) {
  let projectTitle = document.createElement("input");
  projectTitle.placeholder = "project title";
  projectTitle.type = "text";
  let form = formLoader(document.createElement("div"));
  form.className = 'todo-form'
  parentNode.appendChild(projectTitle);
  let span = document.createElement('span');
  span.innerHTML = 'X';
  span.className = 'remove-project';
  parentNode.appendChild(span);
  parentNode.appendChild(form);

  let todoTable = document.createElement("table");
  todoTable.classList.add("table");
  const headers = [
    "Title",
    "Description",
    "Priority",
    "Due Date",
    "Completed",
    "Remove"
  ];


  todoTable.appendChild(headerMaker(headers));
  parentNode.className = 'project-div';
  parentNode.appendChild(todoTable);

  return parentNode;
}

export default projectMaker;
