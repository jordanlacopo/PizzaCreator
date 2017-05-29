import React from 'react';
import { Component } from 'react';

import PizzaViwer from '../containers/pizza-viewer'
import PizzaAdd from '../containers/pizza-add'
import PizzaOptions from '../containers/pizza-options'
import PizzaTotal from '../containers/pizza-total'



export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      active: "true"
    }
    let that= this;

    setTimeout(function() {
      that.setState({active: false});
    },1500)
  }
  render() {
    return (
      <div>
        <div className={"Loader-wrapper "+ (this.state.active ? "active" : "dis" )}>
          <div className="spin360-preloader">
              <div className="spin360-preloader__slice"></div>
              <div className="spin360-preloader__slice"></div>
              <div className="spin360-preloader__slice"></div>
              <div className="spin360-preloader__slice"></div>
          </div>
        </div>

       	<PizzaViwer />
       	<div className="left-w">
       		<PizzaAdd />
       		<PizzaOptions />
          <PizzaTotal />
       	</div>
 
      </div>
    );
  }
}