import React from 'react';
import logo from './logo.svg';
import './App.css';
import {LifeCycle} from './components/text.components';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      view: true,
      text: "Hello",
      Message: "Hi"
    }
    this.handleToogle = this.handleToogle.bind(this);
  }
  handleToogle(){
    this.setState({view: !this.state.view});
  }
  handleUpdate = () => {
    this.setState((prevState, prevProps) => {
      return {text: prevState.text.concat(" _Hello")};
    });
  }
  handleChange = () => {
    this.setState((prevState, prevProps) => {
      return {Message: prevState.Message};
    });
  }
  render(){
    return(
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{this.state.text}</p>
        <button onClick={this.handleToogle}>
          Toogle
        </button>
        <br/>
        <button onClick={this.handleUpdate}>
          Update
        </button>
        <br/>
        <button onClick={this.handleChange}>
          Change
        </button>
          {this.state.view ? <LifeCycle naMe={this.state.Message}/> : null}
      </header>
    </div>
    );
  }
}

export default App;
