import rowMaker from "./rowMaker";
import Todo from "./todo_object";
import colorizeRows from './colorizeRows';

function addToDoToProject(parentNode) {
  let project = parentNode.closest('div');
  let title = project.querySelector("#title-input"),
    description = project.querySelector("#description-input"),
    priority = project.querySelector("select"),
    dueDate = project.querySelector("#due-date");

    [title, description, dueDate].forEach(input => {
      if (!input.value) {
        alert("Please enter all values");
        throw new Error('Enter a Value for all of the inputs');
      }
    });
  

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
