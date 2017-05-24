import React from 'react';
import { Component } from 'react';

import PizzaViwer from '../containers/pizza-viewer'
import PizzaAdd from '../containers/pizza-add'
import PizzaOptions from '../containers/pizza-options'



export default class App extends Component {
  render() {
    return (
      <div>
       	<PizzaViwer />
       	<div className="left-w">
       		<PizzaAdd />
       		<PizzaOptions />
       	</div>
      </div>
    );
  }
}