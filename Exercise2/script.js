function AddData() {
    var rows = "";
    var name = document.getElementById("name").value;
    var lastname = document.getElementById("lastname").value;
    var age = document.getElementById("age").value;
    var profession = document.getElementById("profession").value;
    var age = document.getElementById("age").value;


    rows += "<tr><td>" + name + "</td><td>" + lastname + "</td><td>" + age + "</td><td>" + profession + "</td></tr>";
    $(rows).appendTo("tbody");
}

function sortTableAZ() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("table");
    switching = true;
    while (switching) {
        switching = false;
        rows = table.rows;
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[0];
            y = rows[i + 1].getElementsByTagName("TD")[0];
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}
function sortTable09() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("table");
    switching = true;
    while (switching) {
        switching = false;
        rows = table.rows;
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
             x = parseInt(rows[i].getElementsByTagName("TD")[2].innerHTML) ;
             y = parseInt(rows[i + 1].getElementsByTagName("TD")[2].innerHTML) ;
             console.log("x="+x+"y="+y);
            if (x > y) {
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}

// function ResetForm(){
//     document.getElementById("person").reset();
// }