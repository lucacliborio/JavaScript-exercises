function calculardesconto(){

    var n1, mult;

    n1 = document.getElementById("txtn1").value;

    if(n1 <= 20){
      mult = n1 * 1.60; 
    }
      else if (n1 > 20 && n1 <= 50){
        mult = n1 * 2.80;
      }
        else{
          mult = n1 * 4.20;
        }
    if(mult < 100){
       mult = mult - 0.05 * mult;
    }
      else if (mult > 200){
              mult = 1.10 * mult
      }
      document.getElementById("txtresultado").value = mult;
  }