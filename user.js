 var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/192rZkw1FgXVQfKNlHePn35kYunb51rni5JlMkvB3x1k/edit?usp=sharing';

  function init() {
    Tabletop.init( { key: publicSpreadsheetUrl,
                     callback: showInfo,
                     simpleSheet: true } )
  }
  function showInfo(data, tabletop) {
    //data = Object.assign({}, dat);
datao=JSON.parse(JSON.stringify(data));
    console.log(data);
    console.log(data.length)
    var e = document.getElementById("status");
var strUser = e.value;
console.log(strUser);
    var col = [];
    for (var i = 0; i < data.length; i++) {
        for (var key in data[i]) {
            if (col.indexOf(key) === -1) {
                col.push(key);
            }
        }
    }
    var table = document.createElement("table");
     table.classList.add("table-striped");
    table.classList.add("table-dark");


    // Create table header row using the extracted headers above.
    var tr = table.insertRow(-1);                   // table row.

    for (var i = 0; i < col.length; i++) {
        var th = document.createElement("th");      // table header.
        th.innerHTML = col[i];
        tr.appendChild(th);
    }
     var th = document.createElement("th");      // table header.
        th.innerHTML = "REGISTER";
        tr.appendChild(th);

    // add json data to the table as rows.
    for (var i = 0; i < data.length; i++) {
        if(data[i].STATUS==strUser || strUser=='dummy'){

        tr = table.insertRow(-1);

        for (var j = 0; j < col.length; j++) {
            var tabCell = tr.insertCell(-1);
            tabCell.innerHTML = data[i][col[j]];

        }
        var tabCell = tr.insertCell(-1);
            tabCell.innerHTML ="<button type='button' class='btn btn-info' onclick='myfunction()'>Register</button>";
    }
    
    }

    // Now, add the newly created table with json data, to a container.
    var divShowData = document.getElementById('showData');
    divShowData.innerHTML = "";
    divShowData.appendChild(table);
}

  window.addEventListener('DOMContentLoaded', init)
function myfunction()
{
    window.location.href='reg2.html';
}