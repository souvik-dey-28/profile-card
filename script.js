// const year = document.getElementById("year");
// year.textContent = new Date().getFullYear();


function todayDate(){
    var d = new Date();
    var n = d.getFullYear() + "  ";
    return document.getElementById("date").innerHTML = n;
  }