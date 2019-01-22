import formLoader from "./form";
import headerMaker from "./headerMaker";


function projectMaker(parentNode = document.createElement("div")) {

  let input = document.createElement('input');
  input.type = 'text';
  input.className = 'project-name';
  input.placeholder = 'Change Project Name'
  parentNode.appendChild(input);

  let button = document.createElement('button');
  button.className = 'btn-info edit-project-name';
  button.innerHTML = 'Change';
  parentNode.appendChild(button);

  
  let projectTitle = document.createElement('p')
  
  projectTitle.innerHTML = prompt('Project Title?');
  parentNode.appendChild(projectTitle);

  let form = formLoader(document.createElement("div"));
  form.className = 'todo-form'

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
