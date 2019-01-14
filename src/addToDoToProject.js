import rowMaker from "./rowMaker";
import Todo from "./todo_object";
import colorizeRows from './colorizeRows';

function addToDoToProject(parentNode) {
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
  title.value = '';
  description.value = '';
  dueDate.value = '';
  let row = rowMaker(todo);
  row.classList.add(colorizeRows(row));
  parentNode.appendChild(row);
}

export default addToDoToProject;