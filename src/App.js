import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import NavBar from './NavBar';


class App extends React.Component {


  render() {

    return (
      <div className="App">
        <NavBar userId={this.props.userId} />

      </div>
    );
  }
}

const mapState = state => {
  return {
    userId: state.user.id
  }
}


export default connect(mapState)(App)