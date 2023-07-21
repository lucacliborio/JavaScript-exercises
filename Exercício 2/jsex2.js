function validarnumero(){

    var n;
    n = document.getElementById("txtnumero").value;
    
    if (n >=0 && n <=10){
      alert("Insuficiente")
    }
      else if (n > 10 && n <= 14){
        alert("Bom")
      }
        else{
          alert("Muito bom")
        }
    
  }