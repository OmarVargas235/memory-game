import React, { useState, useEffect, useContext } from 'react';
import { ArrayParEmojisContex } from '../../arrayParEmojisContext';

import fuegosArtificiales from '../../Assets/fuego-artificial.gif';
import fuegosArtificialesSonido from '../../Assets/fuegos-artificiales.mp3';

const FinJuego = () => {

	const { guardarArrayParEncontrado, guardarReiniciarJuegoEstado } = useContext( ArrayParEmojisContex );

	const audioRef = React.createRef();

	const [claseMostrarModal, guardarClaseMostrarModal] = useState(false);

	useEffect(() => { 
		
		let mounted = true;
		const audio = audioRef.current;

		if (claseMostrarModal) return;

		setTimeout(() => {
			/*Pasado el segundo activa el sonido y cambia el estado a true para que el opacity cambie a  
			de 0 a 1*/
			if (mounted) {
				audio.play();
				mounted && guardarClaseMostrarModal(true);
			}

		}, 1260);

		return () => mounted = false;

	}, [audioRef, claseMostrarModal]);

	const reiniciarJuego = () => {
		guardarArrayParEncontrado([]);
		guardarReiniciarJuegoEstado(true);
	}

    return (
		<React.Fragment>
	        <div 
	        	className="modal fade d-flex flex-column justify-content-center align-items-center" 
	        	tabIndex="-1" 
	        	aria-labelledby="modal" 
	            aria-hidden="false" id="text"
	            style={{
	            	opacity: claseMostrarModal ? '1' : '0'
	            }}
	           >
	            <div className="modal-dialog" role="document">
	                <div className="modal-content">
	                    <div className="modal-body">
	                        <img src={fuegosArtificiales} alt="fuegosArtificiales"/>
	                    </div>
	                </div>
	            </div>

		        <div className="btn-group">
		        	<button 
		        		className="btn btn-success mr-5"
		        		onClick={ reiniciarJuego }
		        	>Reiniciar Juego</button>
	  				<button 
	  					className="btn btn-danger ml-5"
	  					onClick={() => guardarArrayParEncontrado([])}
	  				>Fin del Juego</button>
		        </div>

		        <h2>Felicitaciones haz ganado el juego</h2>
	        </div> 

            <audio ref={audioRef}>
			  <source src={fuegosArtificialesSonido} type="audio/mpeg" />
			</audio>
	    </React.Fragment> 
    )
}

export default FinJuego;