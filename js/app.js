
// document elements
var btn = document.getElementById("gen-btn");
var cardcontainer = document.getElementById("cardContainer");
var toastLiveExample = document.getElementById('liveToast')


// event listener
btn.addEventListener("click", genCode);

// function
function genCode() {
    var code = "#";
    
    for (let index = 0; index < 6; index++) {
        code += getCorresponding(Math.ceil(Math.random() * 10));
    }
    
    var style = "background-color: " + code + "; color: #ffffff;";
    var templateString = '<div class="col-sm-4"><div class="card shadow-sm"><div class="preview" id="preview" style="' + style + '"></div><div class="card-body"><div class="d-flex justify-content-between align-items-center"><h5 class="card-title" id="text">' + code + '</h5></div></div></div></div>';

    // inserting cards in the card container.
    cardcontainer.innerHTML += templateString;

    // creating notification.
    var toast = new bootstrap.Toast(toastLiveExample)
    toast.show()
}

// function
function getCorresponding(number) {
    var num = "";

    if (number == 10) num = "A";
    else if (number == 11) num = "B";
    else if (number == 12) num = "C";
    else if (number == 13) num = "D";
    else if (number == 14) num = "E";
    else if (number == 15) num = "F";
    else num = number

    return num;
}
