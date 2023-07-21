function trocar(){
    var txt1 = document.getElementById("div1").innerHTML;
    var txt2 = document.getElementById("div2").innerHTML;

    if(txt1 == ""){
      document.getElementById("div1").innerHTML = txt2;
      document.getElementById("div2").innerHTML = "";
    } 
      else{
        document.getElementById("div2").innerHTML = txt1;
        document.getElementById("div1").innerHTML = "";
      }
  }