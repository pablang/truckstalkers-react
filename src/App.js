import React from 'react';
import MenuCard from './MenuCard';
// import logo from './logo.svg';
// import './App.css';


export default class App extends React.Component {


  render (){
    return (
      <div className="App">
        <h1>Truckstalkers</h1>
        <MenuCard dish="tacos"/>
        <MenuCard dish="tacos"/>
        <MenuCard dish="tacos"/>
        <MenuCard dish="tacos"/>

      </div>
    );
  }
}

