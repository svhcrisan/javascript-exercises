function validateForum() {
    var value = document.getElementById("firstName").value;
    if (value == "") {
        document.getElementById("firstName").setAttribute("style", "border: 1px solid red;");
        alert("We need your first name for this.");
        document.getElementById("firstName").focus() ;
        
    } else {
        document.getElementById("firstName").setAttribute("style", "border: 1px solid #777777;");
    }

    var value = document.getElementById("lastName").value;
    if (value == "") {
        document.getElementById("lastName").setAttribute("style", "border: 1px solid red;");
        alert("We need your last name for this.");
        document.getElementById("lastName").focus();
    } else {
        document.getElementById("lastName").setAttribute("style", "border: 1px solid #777777;");
    }

    var value = document.getElementById("email").value;
    if (value == "") {
        document.getElementById("email").setAttribute("style", "border: 1px solid red;");
        alert("We need your email name for this.");
        document.getElementById("email").focus();
    } else {
        document.getElementById("email").setAttribute("style", "border: 1px solid #777777;");
    }
};


function incrementor() {
    let currentValue = document.getElementsByClassName("quantity").innerHTML;
    currentValue = currentValue + 1;
    document.getElementsByClassName("quantity").innerHTML = currentValue;
}
