function masaCorporal(peso, estatura){

var imc = peso/Math.pow(estatura,2);

alert(imc.toFixed(2));

}

masaCorporal(75,1.65);