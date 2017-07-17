function calcular(){
	var masa = document.getElementById('masa').value;
	var estatura = document.getElementById('estatura').value;
	var imc = parseInt(masa) / Math.pow(parseInt(estatura),2);
	alert("Indice de masa corporal: "+imc.toFixed(2));
}