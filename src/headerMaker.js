

  function headerMaker(headers) {
    let tr = document.createElement('tr');
    for (let header of headers) {
      let th = document.createElement('th');
      th.innerHTML = header;
      tr.appendChild(th)
    }
    return tr;
  }

  export default headerMaker;