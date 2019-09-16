import React, {Component} from 'react';
import {Container, Row, Col, ListGroup, Jumbotron, Button} from 'react-bootstrap';
import Tombol from './Tombol';
class Footer extends Component {
	render(){
		return(
			<Container>
			  <Row>
			    <Col md={3}>
			    	<ListGroup>
						  <ListGroup.Item active>Liga Indonesia</ListGroup.Item>
						  <ListGroup.Item>Liga Inggris</ListGroup.Item>
						  <ListGroup.Item>Liga Italia</ListGroup.Item>
						  <ListGroup.Item>Liga Jerman</ListGroup.Item>
						  <ListGroup.Item>Liga Spanyol</ListGroup.Item>
						  <ListGroup.Item>Liga Belanda</ListGroup.Item>
						</ListGroup>
			    </Col>
			    <Col md={6}>
			    	<Jumbotron>
						  <h1>Liga Indonesia</h1>
						  <p>
						    Bali United Masih Kokok di Puncak Klasemen Hingga Akhir Putaran Pertama.
						  </p>
						  <p>
						    <Button variant="primary">Read more</Button>
						  </p>
						</Jumbotron>
			    </Col>
			    <Col md={3}>
			    	<Tombol/>
			    </Col>
			  </Row>
			</Container>
		);
	}
}

export default Footer; 