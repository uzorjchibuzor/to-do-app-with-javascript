function getTableSiblingOfParentDiv(element) {
  let mainProjectDiv = element.closest("div").parentNode;
  let children = mainProjectDiv.childNodes;
  for (let child of children) {
    if (child.tagName == "TABLE") return child;
  }
}

export default getTableSiblingOfParentDiv;
