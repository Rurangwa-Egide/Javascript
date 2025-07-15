// const fruits = ["apple", "banan", "orange","mangos"];
// fruits.pop();
// fruits.shift();
// fruits.unshift("maize");
// fruits.push("strawberry");
// console.log(fruits);


var index, table = document.getElementById('table');
for (var a = 0; a < table.rows.length; a++){
    table.rows[a].onclick = function() {
          var c =confirm('Do you want to remove this');
          if(c===true){

            index = this.rowIndex;
        table.deleteRow(index);
          }
        

    };

}


