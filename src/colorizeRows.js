
  function colorizeRows(row) {
   let option = row.querySelectorAll('td')[2];
   
    let priority = option.innerHTML;
    if (priority == 'Low') { 
      return 'bg-warning'; 
    }
    else if (priority == 'Medium') { 
      return 'bg-primary'; 
    }
    else { 
      return 'bg-success'; 
    }
}

export default colorizeRows;

