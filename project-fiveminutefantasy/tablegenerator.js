let buildTable = function(data){
  var table = document.getElementById('Table-tbody')

  for (var i = 0; i < data.length; i++){
    var row = 
      `<tr>
          <td>${data[i].filename}</td>
          <td>${data[i].extension}</td>
          <td>${data[i].features}</td>
          <td>${data[i].module}</td>
          <td>${data[i].linesofcode}</td>
        </tr>`
    table.innerHTML += row
  }
}

buildTable(dataPortfolioWebpage)
/*
//add search functionality
//add sort functionality

//add ability to populate table.html by scraping data from source code files
//concatenate all the arrays into one array
Array.concat()

// weed out duplicates
let chars = ['A', 'B', 'A', 'C', 'B'];
let uniqueChars = [...new Set(chars)];
*/