import React, { useState, useEffect } from 'react';

export const ArrayParEmojisContex = React.createContext(); 

const ArrayParEmojisProvider = props => {

	const [arrayEmojis, guardarArrayEmojis] = useState([]);
	const [arrayParEncontrado, guardarArrayParEncontrado] = useState([]);
	const [reiniciarJuegoEstado, guardarReiniciarJuegoEstado] = useState(false);

	useEffect(() => {arrayEmojis.length === 2 && setTimeout(() => guardarArrayEmojis([]), 1300)}, [arrayEmojis]);
	
	return (
		<ArrayParEmojisContex.Provider value={{
			arrayEmojis,
			arrayParEncontrado,
			reiniciarJuegoEstado,
			guardarArrayEmojis,
			guardarArrayParEncontrado,
			guardarReiniciarJuegoEstado
		}}>
			{ props.children }
		</ArrayParEmojisContex.Provider>
	)
}

export default ArrayParEmojisProvider;