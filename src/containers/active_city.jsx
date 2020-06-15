import React, { Component } from 'react';

// import City from '../containers/city';

class ActiveCity extends Component {
  render() {
    const london = 'london';
    let path = `https://kitt.lewagon.com/placeholder/cities/${london}`;
    return (
      <div className="col-sm-8 active-city">
        <h2>{this.props.city.name}</h2>
        <p>{this.props.city.address}</p>
        <img src={path} />
      </div>
    );
  }
}

export default ActiveCity;
