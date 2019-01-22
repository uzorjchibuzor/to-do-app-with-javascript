function getTableSiblingOfParentDiv(element) {
  let children = element.closest("div").parentNode.children;

  for (let child of children) {
    if (child.tagName == "TABLE") return child;
  }
}

export default getTableSiblingOfParentDiv;
