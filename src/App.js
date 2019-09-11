import React from 'react';
import MenuCard from './MenuCard';
import Map from './Map';
import Card from './Card'
// import logo from './logo.svg';
// import './App.css';

const sampleDish = {
  id: '1',
  dish: 'burgers',
  description: 'Lollipop cookie brownie tootsie roll souffle candy gummibears',
  // image: 'https://i.imgur.com/2F5aOCt.jpg?1',
  price: '$9',
  edit: false
}


export default class App extends React.Component {

  onSave = (data) => {
    const {dish, price, desc} = data
    sampleDish.dish = dish ? dish : sampleDish.dish
    sampleDish.price = price ? price : sampleDish.price
    sampleDish.description = desc ? desc : sampleDish.description
  }


  render (){
    return (
      <div className="App">
        <h1>Truckstalkers</h1>
        <section className="menu">
          <p>Menu</p>
          <Card data={sampleDish} onSave={this.onSave}/>
          <Card data={sampleDish} onSave={this.onSave}/>
          <Card data={sampleDish} onSave={this.onSave}/>
          <Card data={sampleDish} onSave={this.onSave}/>
        </section>
        <section className="competition-map">
          <Map
            googleMapURL="https://maps.googleapis.com/maps/api/js?&callback=initMap"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </section>
        <section className="your-locations">


        </section>

      </div>
    );
  }
}

