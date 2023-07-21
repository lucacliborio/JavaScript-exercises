function calcularmedia(){

    var n1, n2, med;

    n1 = document.getElementById("n1").value;
    n2 = document.getElementById("n2").value;

    n1 = parseFloat(n1);
    n2 = parseFloat(n2);
    med = (n1 + n2) /2;

    if(med < 3){
      document.getElementById("txtresultado").value = "REPROVADO";
    }
      else if(med >= 3 && med <7){
        document.getElementById("txtresultado").value = "EXAME";
      }
       else{
        document.getElementById("txtresultado").value = "APROVADO";
       }

  }