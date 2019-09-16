import React, {Component} from 'react';
import Slide from './Main/Slide';
import Footer from './Main/Footer';

class Main extends Component {
	render(){
		return(
			<div>
				<Slide/>
				<br/>
				<Footer/>
			</div>
		);
	}
}

export default Main;