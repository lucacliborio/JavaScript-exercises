function calcular(){
    var horas, classificacao, total;

    classificacao = document.getElementById("ddclassificacao").value;
    horas = document.getElementById("txthoras").value;
    

    if (classificacao == "1"){
        total = horas * 50;
    }   
    else    
        if(classificacao == "2"){
            total = horas * 75;
        }
        else{
            total = horas * 100;
        }

        document.getElementById("txttotal").textContent="R$: " + total;
}

function insereImagemAberto(){
    document.getElementById("imgcadeado").setAttribute("src", "img/Aberto.png");
}

function insereImagemFechado(){
    document.getElementById("imgcadeado").setAttribute("src", "img/Fechado.png");
}



