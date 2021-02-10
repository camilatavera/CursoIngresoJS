/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueldo;
	var resultado;

	sueldo=parseFloat(txtIdSueldo.value);   //pongo float por si no es un numero entero.
	
	resultado=sueldo*110/100;

	txtIdResultado.value=resultado;

	
}
