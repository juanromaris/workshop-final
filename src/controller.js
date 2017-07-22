import React from 'react'
import ReactDOM from 'react-dom';
//Components
import Cuadritos from './app/components/Cuadritos/Cuadritos';


ReactDOM.render(<Cuadritos colorList={['blue', 'red', 'green']}/>, document.querySelector('#example'));