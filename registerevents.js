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
    var col = [];
    for (var i = 0; i < data.length; i++) {
        for (var key in data[i]) {
            if (col.indexOf(key) === -1) {
                col.push(key);
            }
        }
    }
    var select = document.createElement("select");
    select.name='event_name';
   


    // Create table header row using the extracted headers above.
                    // table row.

   

    // add json data to the table as rows.
    for (var i = 0; i < data.length; i++) {
        if(data[i].STATUS=="ONGOING"){

       var option = document.createElement("option");
       option.value = data[i][col[0]];
       option.text = data[i][col[0]];
       option.class='form-control';
    select.appendChild(option);
    }
    
    }

    // Now, add the newly created table with json data, to a container.
    var divShowData = document.getElementById('showData');
    divShowData.innerHTML = "";
    divShowData.appendChild(select);
}

  window.addEventListener('DOMContentLoaded', init)
