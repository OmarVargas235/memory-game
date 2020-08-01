export const generarCartasAleatorio = () => {
	const arrayOriginal = [ "😠", "♠", "😲", "⚛", "♥", "☣", "♣", "♦"];
	
	const arrayDuplicado = [...arrayOriginal, ...arrayOriginal];
	const arrayEmojisAleatorios = [...arrayDuplicado];
	const arrayNumerosAleatorios = [];
	
	for (let i = 0; i < 16; i++) {
		let numeroAleatorio = Math.floor( Math.random() * 15);
		
		/*Si el numero aleatorio ya esta en el array, repite el ciclo hasta que salga otro numero que no este 
		en el array*/
		while ( arrayNumerosAleatorios.includes(numeroAleatorio) && i < 15) {
			numeroAleatorio = Math.ceil( Math.random() * 15);
		}
		
		arrayNumerosAleatorios.push(numeroAleatorio)
	}
	
	/*arrayNumerosAleatorios puede tener un valor que se halla repetido asi que se saca el ultimo numero*/	
	arrayNumerosAleatorios.pop();

	for (let i = 0; i < 16; i++) !arrayNumerosAleatorios.includes(i) && arrayNumerosAleatorios.push(i);
	
	/*Compara todos los numeros  de "arrayNumerosAleatorios" con sus indices que van del 0 al 15 y el numero 
	que falte en el array lo ingresa en la ultima posicion*/
	arrayNumerosAleatorios.forEach((numAleatorio, i) => arrayEmojisAleatorios[numAleatorio] = arrayDuplicado[i]);

	return arrayEmojisAleatorios;
}