import React, {Component} from 'react'
import {Row, Col, Dropdown, DropdownButton, Breadcrumb} from 'react-bootstrap';
import './css/app.css'

class Header extends Component {
	render(){
		return(
			<div>
				 <Row className="bg-header">
	        <Col lg={1}>
	          <DropdownButton title="Pilih Bahasa" size="sm">
	            <Dropdown.Item>Indonesia</Dropdown.Item>
	          </DropdownButton>
	        </Col>
	        <Col lg={{span: 1, offset: 9}}>
	          <img 
	            src="https://png.pngtree.com/svg/20161113/ef1b24279e.png"
	            alt="user" 
	            height="42px" 
	           />
	          <p className="user-text">Alan Saputra</p>
	        </Col>
	      </Row>
	      <Row>
	      	<Col lg={{span: 4, offset: 8}}>
		      	<Breadcrumb>
						  <Breadcrumb.Item>Home</Breadcrumb.Item>
						  <Breadcrumb.Item>Berita</Breadcrumb.Item>
						  <Breadcrumb.Item active>Bola</Breadcrumb.Item>
						</Breadcrumb>
					</Col>
	      </Row>
    	</div>
		);
	}
}

export default Header;