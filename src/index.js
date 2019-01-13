import "./scss/index.scss";
import projectDivMaker from "./projectDivMaker";
import addToDoToProject from "./addToDoToProject";
import getTableSiblingOfParentDiv from "./getTableSiblingOfParentDiv";
import { builtinModules } from "module";

let content = document.querySelector("#content");

let title = document.createElement("h4");
title.innerHTML = "to-do app";

let newProjectButton = document.createElement("button");
newProjectButton.innerHTML = "New Project";
newProjectButton.className = "btn-primary";
newProjectButton.id = "new-project-button";

let removeAllButton = document.createElement('button');
removeAllButton.className = 'btn-danger remove-all'
builtinModules.innerHTML = 'Remove All Projects';



content.appendChild(title);
content.appendChild(newProjectButton);

let divsArray = localStorage.getItem('divs') ? JSON.parse(localStorage.getItem('divs')) : [];

localStorage.setItem('divs', JSON.stringify(divsArray));
const data = JSON.parse(localStorage.getItem('divs'));

for (let item of data) {
  let newDiv = document.createElement('div');
  newDiv.classList.add('project-div');
  newDiv.innerHTML = item;
  newDiv.id = data.indexOf(item);
  content.appendChild(newDiv)
}



// New Project Event Listener
let divIds = 0;

function newProject() {
  let divvy = content.appendChild(projectDivMaker());
  divvy.id = divIds;
  divIds++;
  
  // LocalStorage

  divsArray.push(divvy.innerHTML);
  localStorage.setItem('divs', JSON.stringify(divsArray));

};


document
  .getElementById("new-project-button")
  .addEventListener("click", () => newProject());

// Event Listener That adds a todo to its project

content.addEventListener("click", e => {
  if (e.target && e.target.classList.contains("make-todo")) {
    addToDoToProject(getTableSiblingOfParentDiv(e.target));
  }
});

// Event Listener That removes a todo from its project

content.addEventListener("click", e => {
  if (e.target && e.target.classList.contains("btn-danger")) {
    let row = e.target.closest("tr");
    row.parentNode.removeChild(row);
  }
});

// Event Listener that removes a project

content.addEventListener("click", e => {
  if (e.target && e.target.classList.contains("remove-project")) {
    let project = e.target.closest("div");
    // console.log(divsArray.indexOf(project));
    project.parentNode.removeChild(project);
  }
});

// Event Listener for checkbox

content.addEventListener("change", e => {
  if (e.target && e.target.classList.contains("completed-box")) {
    if (e.target.checked) {
      e.target.closest("tr").classList.add("text-muted");
    } else {
      e.target.closest("tr").classList.remove("text-muted");
    }
  }
});
