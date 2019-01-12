function rowMaker(todo) {
  let row = document.createElement("tr");
  let completedTd = document.createElement("td");
  let deleteTd = document.createElement("td");

  let completed = document.createElement("input");
  completed.className="completed-box";
  completed.type = "checkbox";

  let deleteButton = document.createElement("button");
  deleteButton.className = "btn-danger";
  deleteButton.innerHTML = "Destroy";

  for (let prop in todo) {
    let td = document.createElement("td");
    td.innerHTML = todo[prop];
    row.appendChild(td);
  }

  completedTd.appendChild(completed);
  deleteTd.appendChild(deleteButton);
  row.appendChild(completedTd);

  row.appendChild(deleteTd);

  return row;
}

export default rowMaker;
