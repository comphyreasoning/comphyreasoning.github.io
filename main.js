var e_count = 3; // set number of examples included;

function showexample(n) {

    for (let i = 1; i < e_count + 1; i++) {
        if (n == i) {
            document.getElementById("example" + i).style.display = "flex";
            document.getElementById("show" + i).className = "active";
        } else {
            document.getElementById("example" + i).style.display = "none";
            document.getElementById("show" + i).className = "";
        }
    }
};

showexample(1);
