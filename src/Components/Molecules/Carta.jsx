import React, { useState, useEffect, useContext } from 'react';
import { ArrayParEmojisContex } from '../../arrayParEmojisContext';

const Carta = ({ emoji }) => {
	
	const { 
		arrayEmojis, 
		guardarArrayEmojis,
		arrayParEncontrado,
		guardarArrayParEncontrado,
		reiniciarJuegoEstado,
		guardarReiniciarJuegoEstado 
	} = useContext( ArrayParEmojisContex );

	const [toggleGirar, guardarToggleGirar] = useState(false);
	const [parEncontrado, guardarParEncontrado] = useState(false);

	useEffect(() => {
		
		//Resetea todas las variables a sus valores iniciales.
		if (reiniciarJuegoEstado) {
			guardarToggleGirar(false);
			guardarParEncontrado(false);
			guardarReiniciarJuegoEstado(false);
		}

		if (reiniciarJuegoEstado) return; // Evita que se ejecute dos veses lo de abajo.
		
		//Compara los emojis en la pocion '0' y '1', si son iguales los deja boca arriba
		if (arrayEmojis.length === 2) {
			!(arrayEmojis[0] === arrayEmojis[1]) 
			? setTimeout(() => guardarToggleGirar(false), 1000)
			: guardarArrayParEncontrado([...arrayParEncontrado, arrayEmojis[0]]);
		}
		
		//Si encuentra el emoji en el array y lo deja boca arriba y cambia el color a verde
		arrayParEncontrado.forEach(el => emoji === el && guardarParEncontrado(true) ); 

	}, [emoji, arrayEmojis, reiniciarJuegoEstado, guardarArrayParEncontrado, guardarReiniciarJuegoEstado]);

	return (
		<div className='col-3 mb-3 girar d-flex justify-content-center'>
			<div className="contenedor-carta"
				onClick={ () => {
					(arrayEmojis.length < 2 && !toggleGirar && !parEncontrado) 
					&& guardarArrayEmojis([...arrayEmojis, emoji]);
					arrayEmojis.length < 2 && guardarToggleGirar( true );
				} }
				style={ {
					transform: (toggleGirar || parEncontrado) ? 'rotate3d(1, 0, 0, 180deg)' : 'rotate3d(1, 0, 0, 0)',
					backgroundColor: parEncontrado ? '#8BC968' : '#FCD04B'
				} }>
				<div 
					className="carta frontal text-center d-flex align-items-center justify-content-center"
				>{ emoji }</div>
				<div className="carta trasera"></div>
			</div>
		</div>
	)
}

export default Carta;