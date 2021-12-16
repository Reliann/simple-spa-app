import './App.css';
import React, {Component} from "react"
import AllUsers from './components/allUsersComp';
class App extends Component {
  constructor() {
    super()
  }

  render() {

    return (
      <div className="App" >
        <AllUsers/>
      </div>
  
    );
  }
}

export default App;
