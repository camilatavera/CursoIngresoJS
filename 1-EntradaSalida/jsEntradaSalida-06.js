/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let numero1;
	let numero2;
	let total;


	numero1=parseInt(txtIdNumeroUno.value)
	numero2=parseInt(txtIdNumeroDos.value)

	total=numero1+numero2

	alert("La suma de los numeros es " +total);
}

