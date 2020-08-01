import React from 'react';
import './Assets/bootstrap.min.css';
import ArrayParEmojisProvider from './arrayParEmojisContext';

import Titulo from './Components/Pages/Titulo';
import Cartas from './Components/Pages/Cartas';

const App = () => (
	<div className="container">
		<Titulo />
		<ArrayParEmojisProvider>
			<Cartas />
		</ArrayParEmojisProvider>
	</div>
)

export default App;