import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(){
    super()
    this.state = {
      textToShow: "Hola Koders!!!",
      isOn: false
    }
    this.changeHandler = this.changeHandler.bind(this)
    this.clickHandler = this.clickHandler.bind(this)
  }

  changeHandler( event ){
    let newText = event.target.value
    this.setState({ textToShow : newText})
  }

  clickHandler( event ){
    this.setState({ isOn : !this.state.isOn })
  }

  render(){
    return(
      <div className="App">
        <h1> {this.state.textToShow} </h1>
        <input type="text" onChange={ this.changeHandler }/>
        <div className={ this.state.isOn ? "foco foco-on" : "foco"}></div>
        <button type="button" onClick={ this.clickHandler }> Encender </button>
      </div>
    )
  }
}

export default App;
