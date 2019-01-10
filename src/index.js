import "./scss/index.scss";
import formLoader from "./form";
import Todo from "./todo_object";
import rowMaker from "./rowMaker";
import headerMaker from "./headerMaker";

let content = document.querySelector("#content");
content.className = "container";
let entryForm = formLoader(document.createElement("div"));
content.appendChild(entryForm);

// End of Form Section
const headers = [
  "Title",
  "Description",
  "Priority",
  "Due Date",
  "Completed",
  "Remove"
];
let todoDiv = document.createElement("div");
let todoTable = document.createElement("table");

todoTable.appendChild(headerMaker(headers));
todoTable.className = "table";

// Click Listener That add rows of todos to table

function addToTable() {
  let title = document.getElementById("title-input"),
    description = document.getElementById("description-input"),
    priority = document.querySelector("select"),
    dueDate = document.getElementById("due-date");

  let todo = new Todo(
    title.value,
    description.value,
    priority.value,
    dueDate.value
  );
  todoTable.appendChild(rowMaker(todo));
  console.log(destroyer);
}

let form = document.querySelector("form");

// prevent default
function handleForm(event) {
  event.preventDefault();
}

form.addEventListener("submit", handleForm);

// Click Listener That removes a row of todos from table

let destroyer = document.querySelectorAll(".btn-danger");
  // button.addEventListener("click", () => {
  //   let toBeDeleted = button.closest("tr");
  //   toBeDeleted.parentNode.remove(toBeDeleted);
  // });

  




document
  .getElementById("make-todo")
  .addEventListener("click", () => addToTable());

todoDiv.appendChild(todoTable);

content.appendChild(todoDiv);
