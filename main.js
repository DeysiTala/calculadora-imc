/*<<<<<<< HEAD
function calcular(){

	var masa = document.getElementById('masa').value;
	var estatura = document.getElementById('estatura').value;
	var imc = parseInt(masa) / Math.pow(parseInt(estatura),2);
	alert("Indice de masa corporal: "+imc.toFixed(2));

}
=======*/
function masaCorporal(peso, estatura){

var imc = peso/Math.pow(estatura,2);

alert(imc.toFixed(2));

}

masaCorporal(75,1.65);
//>>>>>>> 51bdb4d7a1814a70cfad97dc69f876412e550b4a
