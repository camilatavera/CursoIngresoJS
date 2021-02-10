/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{	let nombre;

	nombre=prompt("Ingrese su nombre");

	//copio el nombre guardado en la variable nombre EN la caja de texto embebida en la pagina html
	//document.getElementById("txtIdNombre").value=nombre
	txtIdNombre.value=nombre

}