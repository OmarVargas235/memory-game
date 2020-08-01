import React, { useState, useEffect, useContext } from 'react';
import { ArrayParEmojisContex } from '../../arrayParEmojisContext';
import { generarCartasAleatorio } from '../../helper';

import Carta from '../Molecules/Carta';
import FinJuego from '../Molecules/FinJuego';

const Cartas = () => {

	const { arrayParEncontrado, reiniciarJuegoEstado } = useContext( ArrayParEmojisContex );

	const [cartas, guardarCartas] = useState([]);

	useEffect(() => {
		
		if (reiniciarJuegoEstado) return;

		guardarCartas( generarCartasAleatorio() )
	}, [reiniciarJuegoEstado]);
	
	return (
		<React.Fragment>
			<div className="row px-md-5">
				{
					cartas.map((element, index) => (
						<Carta
							key={index} 
							emoji={element}
						/>
					))
				}
			</div>
			
			{
				arrayParEncontrado.length === 8 && <FinJuego />
			}
		</React.Fragment>
	)
}

export default Cartas;