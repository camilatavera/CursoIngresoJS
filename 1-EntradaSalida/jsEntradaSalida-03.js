/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	let nombreIngresado;
	nombreIngresado=txtIdNombre.value;
	alert(nombreIngresado);
	
	
	//Le otorgo la cadena vacia, asi puedo seguir poniendo otros nombres. OPCIONAL
	txtIdNombre.value=""
}


