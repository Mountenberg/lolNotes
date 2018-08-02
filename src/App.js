import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menu: null
    }
  }
  /*Menu can be games, notes or profile*/
  choiceFromMenu = (choice) => {
    this.setState({ menu: choice });
  }


  render() {
    return (
      <div>
        <Header />
        <Menu chosenMenu={this.choiceFromMenu} />
        <ContentArea menu={this.state.menu}/>
      </div>
    );
  }
}

class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menu: null
    }
    this.handleMenuChange = this.handleMenuChange.bind(this);
  }

  handleMenuChange(input) {
    this.setState({ menu: input.target.value });
    this.props.chosenMenu(input.target.value);
  }



  render() {
    return (
      <div className="menu">
        <ul>
          <li><input type="radio" id="games" name="menu" value="games" className="hidden" onChange={this.handleMenuChange} /><label htmlFor="games"><GamesMenu /></label></li>
          <li><input type="radio" id="notes" name="menu" value="notes" className="hidden" onChange={this.handleMenuChange} /><label htmlFor="notes"><NotesMenu /></label></li>
          <li><input type="radio" id="profile" name="menu" value="profile" className="hidden" onChange={this.handleMenuChange} /><label htmlFor="profile"><ProfileMenu /></label></li>
        </ul>
      </div>
    )
  }
}

function Header(props) {
  return <h1>Lolnotes</h1>
}

function GamesMenu(props) {
  return <p>Games</p>
}
function NotesMenu(props) {
  return <p>Notes</p>
}
class ProfileMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loggedIn: false
    }
  }
  render() {
    if (this.state.loggedIn) {
      return ("Du er logget ind hr");
    } else {
      return (
        <p>Log-in</p>
      )
    }

  }
}

class ContentArea extends Component {
  constructor(props) {
    super(props)
  }

  render(){
    if(this.props.menu == "games"){
      return "Nu vises der games hr"
    }
    if(this.props.menu == "notes"){
      return "Nu vises der notes hr"
    }
    if(this.props.menu == "profile"){
      return "Nu ser du din slikkeprofil hr"
    }

    return null;
  }
}

export default App;
