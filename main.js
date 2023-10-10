function dropdownMenu() {
    var x = document.getElementById("navbarClick");
    if (x.className === "topnav"){
        x.className += " responsive";
    }
    else{
        x.className = "topnav";
    } 
}