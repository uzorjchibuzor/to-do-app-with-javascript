import "./scss/index.scss";
import projectDivMaker from "./projectDivMaker";
import addToDoToProject from "./addToDoToProject";
import getTableSiblingOfParentDiv from "./getTableSiblingOfParentDiv";

let content = document.querySelector("#content");

let title = document.createElement('h4');
title.innerHTML = 'to-do app'

let newProjectButton = document.createElement("button");
newProjectButton.innerHTML = "New Project";
newProjectButton.className = "btn-primary";
newProjectButton.id = "new-project-button";


content.appendChild(title);
content.appendChild(newProjectButton);

// New Project Event Listener
let divIds = 0;
function newProject() {
  let divvy  = content.appendChild(projectDivMaker());
  divvy.id = divIds;
  divIds++;
}



document
  .getElementById("new-project-button")
  .addEventListener("click", () => newProject());

// Event Listener That adds a todo to its project

content.addEventListener("click", (e) => {
  if (e.target && e.target.classList.contains("make-todo")) {
    addToDoToProject(getTableSiblingOfParentDiv(e.target));
  }
});


// Event Listener That removes a todo from its project

content.addEventListener("click", (e) => {
  if (e.target && e.target.classList.contains("btn-danger")) {
    let row = e.target.closest('tr');
    row.parentNode.removeChild(row);
  }
});

// Event Listener that removes a project

content.addEventListener("click", (e) => {
  if (e.target && e.target.classList.contains("remove-project")) {
    let project = e.target.closest('div');
    project.parentNode.removeChild(project);
  }
});

// Event Listener for checkbox

  content.addEventListener('change', (e) => {
    if (e.target && e.target.classList.contains('completed-box')) {
      if (e.target.checked) {
         e.target.closest('tr').classList.add('text-muted');
      } else {
        e.target.closest('tr').classList.remove('text-muted');
      }
    }
  })


  // LocalStorage 

  // let itemsArray = [];
  // localStorage.setItem('items', JSON.stringify(itemsArray));
  // const data = JSON.parse(localStorage.getItem('items'));


  // Function that style a row of todo according to its priority

 