import React, { Component } from 'react';

// import App from '../components/app';
import City from './city';

class CityList extends Component {
  render() {
    return (
      <div className="col-sm-4">
      {this.props.cities.map((city) => <City city={city} key={city.name} />)}
      </div>
    );
  }
}

export default CityList;
