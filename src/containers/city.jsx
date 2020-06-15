import React, { Component } from 'react';


class City extends Component {
  render() {
    return (
      <div className="app cities active-city">
        <h2>{this.props.city.name}</h2>
      </div>
    );
  }
}

export default City;
