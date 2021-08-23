import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Card from './Card';

import mainPhoto from '../assets/images/Main_Photo.jpg';
import gameIcon from '../assets/images/game-icon.jpg';
import starwars from '../assets/images/StarWars-icon.svg';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: 'Color Game',
          subTitle: 'Little pretty JS game',
          imgSrc: gameIcon,
          link: 'https://elitkondor.github.io/js-game/',
          selected: false,
        },
        {
          id: 1,
          title: 'Github',
          subTitle: 'My whole programmed world',
          imgSrc: mainPhoto,
          link: 'https://github.com/ElitKondor',
          selected: false,
        },
        {
          id: 2,
          title: 'Star Wars Database',
          subTitle: 'Cool React Database for Star Wars fans',
          imgSrc: starwars,
          link: 'https://elitkondor.github.io/StarWars-DB/',
          selected: false,
        },
      ],
    };
  }

  handleCardClick = (id, card) => {
    console.log(id);

    let items = [...this.state.items];

    items[id].selected = items[id].selected ? false : true;

    items.forEach((item) => {
      if (item.id !== id) {
        item.selected = false;
      }
    });

    this.setState({
      items,
    });
  };

  makeItems = (items) => {
    return items.map((item) => {
      return (
        <Card
          item={item}
          click={(e) => this.handleCardClick(item.id, e)}
          key={item.id}
        />
      );
    });
  };

  render() {
    return (
      <Container fluid={true}>
        <Row className='justify-content-around'>
          {this.makeItems(this.state.items)}
        </Row>
      </Container>
    );
  }
}

export default Carousel;
