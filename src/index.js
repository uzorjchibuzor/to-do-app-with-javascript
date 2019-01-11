import "./scss/index.scss";
import projectDivMaker from "./projectDivMaker";
import addToDoToProject from "./addToDoToProject";
import getTableSiblingOfParentDiv from "./getTableSiblingOfParentDiv";

let content = document.querySelector("#content");
content.className = "small-container";

let newProjectButton = document.createElement("button");
newProjectButton.innerHTML = "New Project";
newProjectButton.className = "btn-primary";
newProjectButton.id = "new-project-button";
content.appendChild(newProjectButton);

// New Project Event Listener

function newProject() {
  content.appendChild(projectDivMaker());
}

document
  .getElementById("new-project-button")
  .addEventListener("click", () => newProject());

// Event Listener That adds a todo to its project

content.addEventListener("click", function(e) {
  if (e.target && e.target.classList.contains("make-todo")) {
    addToDoToProject(getTableSiblingOfParentDiv(e.target));
  }
});


// Event Listener That removes a todo from its project
function findPositionOfElement(element){
  let parent = element.parentNode;
  let children = parent.childNodes;
  let index = 0;
  while (children[index] != element) {
    index++;
  }
  return index;
}

content.addEventListener("click", function(e) {
  if (e.target && e.target.classList.contains("btn-danger")) {
    let row = e.target.closest('tr');
    row.parentNode.removeChild(row);
  }
});