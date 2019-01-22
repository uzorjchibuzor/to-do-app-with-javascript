import "./scss/index.scss";
import projectDivMaker from "./projectDivMaker";
import addToDoToProject from "./addToDoToProject";
import getTableSiblingOfParentDiv from "./getTableSiblingOfParentDiv";


let content = document.querySelector("#content");

let title = document.createElement("h4");
title.innerHTML = "to-do app";

let newProjectButton = document.createElement("button");
newProjectButton.innerHTML = "New Project";
newProjectButton.className = "btn-primary";
newProjectButton.id = "new-project-button";

let removeAllButton = document.createElement("button");
removeAllButton.className = "btn-danger remove-all";
removeAllButton.innerHTML = "Remove All Projects";

content.appendChild(title);
content.appendChild(newProjectButton);
content.appendChild(removeAllButton);

// LocalStorage

let divsArray = localStorage.getItem("divs")
  ? JSON.parse(localStorage.getItem("divs"))
  : [];

localStorage.setItem("divs", JSON.stringify(divsArray));
const data = JSON.parse(localStorage.getItem("divs"));

for (let item of data) {
  let newDiv = document.createElement("div");
  newDiv.classList.add("project-div");
  newDiv.innerHTML = item;
  newDiv.id = data.indexOf(item);
  content.appendChild(newDiv);
}

// New Project Event Listener

let divIds = 0;

function newProject() {
  let divvy = content.appendChild(projectDivMaker());
  divvy.id = divIds;
  divIds++;

  // LocalStorage

  divsArray.push(divvy.innerHTML);
  localStorage.setItem("divs", JSON.stringify(divsArray));
}

document
  .getElementById("new-project-button")
  .addEventListener("click", () => newProject());

// Event Listener That adds a todo to its project

content.addEventListener("click", e => {
  let index = 0;
  if (e.target && e.target.classList.contains("make-todo")) {
    // get project Div

    let project = e.target.parentNode.parentNode;

    let children = content.children;

    for (let child of children) {
      if (child == project) {
        break;
      }
      index++;
    }

    addToDoToProject(getTableSiblingOfParentDiv(e.target));

    divsArray[index - 3] = children[index].innerHTML; //Updating Local Storage
    localStorage.setItem("divs", JSON.stringify(divsArray));
  }
});

// Event Listener That removes a todo from its project

content.addEventListener("click", e => {
  if (e.target && e.target.classList.contains("remove-todo")) {
    let row = e.target.closest("tr");
    // get project Div
    let index = 0;
    let project = e.target.closest('div');

    let children = content.children;

    for (let child of children) {
      if (child == project) {
        break;
      }
      index++;
    }

    row.parentNode.removeChild(row);
    divsArray[index - 3] = children[index].innerHTML; //Updating Local Storage
    localStorage.setItem("divs", JSON.stringify(divsArray));
  }
});

// Event Listener that removes a project

content.addEventListener("click", e => {
  if (e.target && e.target.classList.contains("remove-project")) {
    let project = e.target.closest("div");
    let children = project.parentNode.children;
    let index = 0;

    for (let child of children) {
      if (child == project) {
        break;
      }
      index++;
    }
    divsArray.splice(index - 3, 1);
    localStorage.setItem("divs", JSON.stringify(divsArray));
    project.parentNode.removeChild(project);
  }
});

// Event Listener for Completed checkbox

content.addEventListener("change", e => {
  if (e.target && e.target.classList.contains("completed-box")) {
    if (e.target.checked) {
      e.target.closest("tr").classList.add("text-muted");
    } else {
      e.target.closest("tr").classList.remove("text-muted");
    }
  }
});

// Event Listener that removes all projects and todos

content.addEventListener("click", e => {
  if (e.target && e.target.classList.contains("remove-all")) {
    localStorage.clear();
    let projects = document.querySelectorAll(".project-div");
    for (let project of projects) {
      content.removeChild(project);
    }
  }
});

// Event Listener that renames a Project 

content.addEventListener('click', (e) => {
  if (e.target && e.target.classList.contains("edit-project-name")) {
    let input = e.target.parentNode.querySelector('.project-name');
    
    if (!input.value) {
      alert('Enter Valid Project Name');
      throw new Error('Invalid Project Name');
    }
    
    let index = 0;
    let project = e.target.closest('div');

    let children = content.children;

    for (let child of children) {
      if (child == project) {
        break;
      }
      index++;
    }

    e.target.parentNode.children[2].innerHTML = input.value;   // the P tag holding the Name of the project is the third childNode of the project-div.
    input.value = '';
    divsArray[index - 3] = children[index].innerHTML; //Updating Local Storage
    localStorage.setItem("divs", JSON.stringify(divsArray));


  }
})
