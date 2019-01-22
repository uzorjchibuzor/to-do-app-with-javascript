function formLoader(parentNode) {
  // HTML Tag Generator Functions

  const inputMaker = (type, name, id, placeholder) => {
    let input = document.createElement("input");
    input.required = true;
    input.placeholder = placeholder;
    input.type = type;
    input.name = name;
    input.id = id;
    return input;
  };

  const mySelectMaker = options => {
    let select = document.createElement("select");

    for (let option of options) {
      let tag = document.createElement("option");
      tag.innerHTML = option;
      select.appendChild(tag);
    }
    return select;
  };

  //  End of HTML Tag Generator Functions

  //  Start of the Title creation

  const titleInput = inputMaker("text", "title", "title-input", "to-do title");

  parentNode.appendChild(titleInput);

  // End of the Title  creation

  //  Start of the Description creation

  const descriptionInput = inputMaker(
    "text",
    "description",
    "description-input",
    "to-do description"
  );
  parentNode.appendChild(descriptionInput);

  //  End of the Description  creation

  //  Start of the Priority creation

  const prioritySelect = mySelectMaker(["Low", "Medium", "High"]);
  parentNode.appendChild(prioritySelect);

  //  End of the Priority creation

  // Start of DueDate creation

  const dueDateInput = inputMaker("date", "Due date", "due-date");
  parentNode.appendChild(dueDateInput);

  // End of Due Date creation

  const button = document.createElement("button");
  button.className = "btn-primary make-todo";

  button.innerHTML = "Create To Do";

  parentNode.appendChild(button);

  return parentNode;
}

export default formLoader;
