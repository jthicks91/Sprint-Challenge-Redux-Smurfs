import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Nav from "./Nav";
import Home from "./Home";
import Smurfs from "./Smurfs";
import SingleSmurf from "./SingleSmurf";
import AddSmurf from "./AddSmurf";
import UpdateSmurf from "./UpdateSmurf";
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" component={Nav} />
          <main>
            <Route exact path="/" component={Home} />
            <Route exact path="/smurfs" component={Smurfs} />
            <Route exact path="/smurfs/:id" component={SingleSmurf} />
            <Route exact path="/add-smurf" component={AddSmurf} />
            <Route exact path="/smurfs/:id/update" component={UpdateSmurf} />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
