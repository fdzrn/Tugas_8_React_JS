import React, {Component} from 'react';
import {Container,Carousel} from 'react-bootstrap';
class Slide extends Component {
	render() {
    return(
      <div>
        <Container>
          <Carousel>
					  <Carousel.Item>
					    <img
					      className="d-block w-100"
					      src="https://images.performgroup.com/di/library/GOAL/63/7f/sani-rizki-fauzi-indonesia-u-22_4yztc4nehkt61fa7omuyagf71.jpg?t=351764441&quality=60&w=1600"
					      alt="First slide"
					    />
					    <Carousel.Caption>
					      <h3>Sani Rizki Fauzi Tegaskan Mental Pemain Timnas Indonesia U-23 Tetap Bagus</h3>
					    </Carousel.Caption>
					  </Carousel.Item>
					  <Carousel.Item>
					    <img
					      className="d-block w-100"
					      src="https://images.performgroup.com/di/library/GOAL/30/f0/neymar-psg-paris-saint-germain-2018-19_gmakk5891n9c19udcwofmrsgc.jpg?t=-1258742791&quality=60&w=1600"
					      alt="Third slide"
					    />

					    <Carousel.Caption>
					      <h3>Tak Betah bermain di Paris,Neymar ingin kembali ke Spanyol</h3>
					    </Carousel.Caption>
					  </Carousel.Item>
					  <Carousel.Item>
					    <img
					      className="d-block w-100"
					      src="https://images.performgroup.com/di/library/GOAL/f3/33/england-celebrate-vs-montenegro_e97kv5anpqlq1gr9nc2qaz4ko.jpg?t=-1232521935&quality=60&w=1600"
					      alt="Third slide"
					    />
					    <Carousel.Caption>
					      <h3>Inggris Mau Jadi Tim Terbaik di Dunia</h3>
					    </Carousel.Caption>
					  </Carousel.Item>
					</Carousel>
        </Container>
      </div>
    )
  }
}

export default Slide;