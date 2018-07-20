import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from './login';
import SignUp from './signup';

class Body extends React.Component {
    constructor() {
      super();
		
      this.state = {
         data: []
      }
	
      this.setStateHandler = this.setStateHandler.bind(this);

      this.findDomNodeHandler = this.findDomNodeHandler.bind(this);

      this.updateState = this.updateState.bind(this);
    };

    setStateHandler() {
      var item = "state..."
      var myArray = this.state.data.slice();
	  myArray.push(item);
      this.setState({data: myArray})
    };

    findDomNodeHandler() {
        var myDiv = document.getElementById('myDiv');
        ReactDOM.findDOMNode(myDiv).style.color = 'green';
    };

    updateState(e) {
        this.setState({name: e.target.value});
    }

   render() {
      return (
         <div>
            <button onClick = {this.setStateHandler}>Set State</button>
            <h4>State Array: {this.state.data}</h4>
            <br/>
            <button onClick = {this.findDomNodeHandler}>FIND DOME NODE</button>
            <div id = "myDiv">NODE</div>
            <br/>
            <input type = "text" value = {this.state.name} onChange = {this.updateState} />
            <h4>{this.state.name}</h4>
            <br/>
            <Router>
            <div>
               <h2>Welcome to React Router Tutorial</h2>
               <ul>
                  <li><Link to={'/signup'}>SignUp</Link></li>
                  <li><Link to={'/login'}>Login</Link></li>
               </ul>
               <hr />
               <Switch>
                  <Route exact path='/signup' component={SignUp} />
                  <Route exact path='/login' component={Login} />
               </Switch>
            </div>
         </Router>
         </div>
      );
   }
}
export default Body;