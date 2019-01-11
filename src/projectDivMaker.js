import formLoader from "./form";
import headerMaker from "./headerMaker";

function projectMaker(parentNode = document.createElement("div")) {
  let projectTitle = document.createElement("input");
  projectTitle.placeholder = "Project Title";
  projectTitle.type = "text";
  let form = formLoader(document.createElement("div"));
  parentNode.appendChild(projectTitle);
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
  parentNode.appendChild(todoTable);

  return parentNode;
}

export default projectMaker;
