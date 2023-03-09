const createTable = () => {
    const table = document.createElement('table');
  
    for (let i = 1; i <= 12; i++) {
      const row = document.createElement('tr');
      const cell = document.createElement('td');
      cell.textContent = i;
      cell.classList.add('centered');
  
      if (i % 4 === 0) {
        cell.classList.add('blue-background');
      }
  
      row.appendChild(cell);
      table.appendChild(row);
    }
  
    return table;
  }
  
  document.body.appendChild(createTable());
  