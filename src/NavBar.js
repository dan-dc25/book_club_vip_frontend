import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  textDecoration: 'none',
  color: 'blue',
}

class NavBar extends React.Component {

    render() {
        return (
          <header>
            <div className="container">
              <br />              
              <div className="row">
                <div className="col">
                  <NavLink to='/books' exact style={link} activeStyle={{ background: 'lightblue' }}>All Books</NavLink>
                  <NavLink to={`/users/${this.props.userId}/books`} exact style={link} activeStyle={{ background: 'lightblue' }}>My Books</NavLink>
                </div>
              </div>

            </div>
            
            <div className="container">
              <div className="row pt-5">
                <div className="col text-center">
                  <h1>Book Club Vip</h1>
                  <h4>A place to explore the world through words.</h4>
                  <br />
                </div>
              </div>
            </div>

        </header>
        )
    }
}

export default NavBar