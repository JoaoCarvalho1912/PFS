var numg = Math.floor(Math.random()*100);
const res = document.getElementById("res");
function funcao(){
    var numuser = parseInt(document.getElementById("numuser").value, 10);  
    if(numuser>numg){
        res.innerHTML = "Seu número é maior que o gerado!"
        document.getElementById("body").style.setProperty("background-color", "darkred");
    }
    else if(numuser==numg){
        res.innerHTML = "Você acertou! Aperte F5 para jogar novamente"
        document.getElementById("body").style.setProperty("background-color", "darkgreen");
    }
    else{
        res.innerHTML = "Seu número é menor que o gerado!"
        document.getElementById("body").style.setProperty("background-color", "darkred");
    }
}