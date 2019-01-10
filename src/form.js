function formLoader(parentNode) {
  let form = document.createElement("form");

  // HTML Tag Generator Functions
  const labelMaker = (title, purpose) => {
    let label = document.createElement("label");
    label.purpose = purpose;
    label.innerHTML = title;
    return label;
  };

  const inputMaker = (type, classList, id, placeholder) => {
    let input = document.createElement("input");
    input.placeholder = placeholder;
    input.type = type;
    input.classList = classList;
    input.id = id;
    return input;
  };

  const classDivMaker = className => {
    let div = document.createElement("div");
    div.className = className;
    return div;
  };

  const mySelectMaker = (className, options) => {
    let select = document.createElement("select");
    select.className = className;

    for (let option of options) {
      let tag = document.createElement("option");
      tag.innerHTML = option;
      select.appendChild(tag);
    }
    return select;
  };

  //  End of HTML Tag Generator Functions

  //  Start of the Title Div creation

  const titleLabel = labelMaker("Title", "toDoTitle");
  const titleInput = inputMaker(
    "text",
    "form-control",
    "title-input",
    "Enter Title"
  );
  const titleDiv = classDivMaker("form-group");
  titleDiv.appendChild(titleLabel);
  titleDiv.appendChild(titleInput);
  form.appendChild(titleDiv);

  // End of the Title Div creation

  //  Start of the Description Div creation

  const descriptionLabel = labelMaker("Description", "toDodescription");
  const descriptionInput = inputMaker(
    "text",
    "form-control",
    "description-input",
    "Enter Description"
  );
  const descriptionDiv = classDivMaker("form-group");
  descriptionDiv.appendChild(descriptionLabel);
  descriptionDiv.appendChild(descriptionInput);
  form.appendChild(descriptionDiv);

  //  End of the Description Div creation

  //  Start of the Priority Div creation

  const priorityLabel = labelMaker("Priority", "toDopriority");
  const prioritySelect = mySelectMaker("form-control", [
    "Low",
    "Medium",
    "High"
  ]);
  const priorityDiv = classDivMaker("form-group");
  priorityDiv.appendChild(priorityLabel);
  priorityDiv.appendChild(prioritySelect);
  form.appendChild(priorityDiv);

  //  End of the Select Div creation

  // Start of DueDate Div creation

  const dueDateLabel = labelMaker("Due Date", "toDodueDate");
  const dueDateInput = inputMaker("datetime-local", "form-control", "due-date");
  const dueDateDiv = classDivMaker("form-group");
  dueDateDiv.appendChild(dueDateLabel);
  dueDateDiv.appendChild(dueDateInput);
  form.appendChild(dueDateDiv);

  // End of Due Date Div

  const button = document.createElement("button");
  button.className = "btn btn-primary";
  button.id = "make-todo";
  button.innerHTML = "Create To Do";

  form.appendChild(button);

  parentNode.appendChild(form);

  return parentNode;
}

export default formLoader;
