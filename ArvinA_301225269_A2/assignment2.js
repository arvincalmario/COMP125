//Arvin Almario / 301225269
// JavaScript source code

function createTable() {
    var col = document.getElementById("column").value;
    var row = document.getElementById("row").value;
   
    if (col >=1  && row >= 1)
    {
        var tab = document.getElementById("table");

        for (var r = 0; r < row; r++)
        {
            var currentRow = table.insertRow(r);

            for (var c = 0; c < col; c++)
            {

                currentRow.insertCell(c).innerHTML = (r + 1) + "," + (c + 1);
            }
        }
    }
    else
        alert("must fill out all fields");

}
document.getElementById("submit").addEventListener("click", createTable, false)

function ResetFunction() {
    document.getElementById("form").reset();
}