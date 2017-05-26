import React from 'react';
import { connect } from 'react-redux';
import { SMALL, MEDIUM, LARGE, MUSHROOM, OLIVES, BASIL, PINEAPPLE, PEPPERONNI, SHRIMP, TOMATTO, PEPPERS,ONIONS }from '../components/prices';


function mapStateToProps(state) {
  return {
  	pizza: state.pizza
  };
}

export class PizzaTotal extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
    	total: []
    }
   
  }

  getTotal = () =>{

  	let total = [];
  	let finalTotal = 0;

  	for (var i = this.props.pizza.length - 1; i >= 0; i--) {
  		let element = this.props.pizza[i];
  		total.push(this.getPizzaPrice(element));
  	}
  	for (var i = total.length - 1; i >= 0; i--) {
  		finalTotal += parseFloat(total[i]);
  	}
  	return finalTotal.toFixed(2);

  };

  getPizzaPrice = (pizza) =>{

  	let array = pizza.Toppings;
  	let size = pizza.Size;
  	let toppings = 0;
  	let totalPerPizza = 0;


  	var sizePrice = this.getSizePrice(size)

  	for (var i = array.length - 1; i >= 0; i--) {
  		var total = this.getToppingPrice(array[i]);
  		toppings += total;
  	}

  	totalPerPizza = toppings + sizePrice;

  	if(size === ""){
  		return 0;
  	}

  	return totalPerPizza.toFixed(2);

  };

  getSizePrice = (size) =>{
  	switch (size) {
  		case "Small":
  			return SMALL
  		case "Medium":
  			return MEDIUM
  		case "Large":
  			return LARGE
  		default:
  			return 0
  			break;
  	}
  };

  getToppingPrice = (topping) => {
  	switch (topping) {
  		case "Mushroom":
  			return MUSHROOM
  			break;
  		case "Olives":
  			return OLIVES
  			break;
  		case "Basil":
  			return BASIL
  		case "Pineapple":
  			return PINEAPPLE
  		case "Pepperonni":
  			return PEPPERONNI
  		case "Shrimp":
  		 	return SHRIMP
  		case "Tomatto":
  			return TOMATTO
  		case "Peppers":
  			return PEPPERS
  		case "Oninons":
  			return ONIONS
  		default:
  			return 0;		
  	}
  }

  render() {
    return (
      <div>
      	 <h1 className="top">Order Summary:</h1>
      	  <div className="addPizza">
        	<ul>{this.props.pizza.map((key, index) => {
          return <li key={index}><div><span> {"Pizza "+(index+1)}</span><p>{(this.getPizzaPrice(key) === 0 ? "please select a size" : this.getPizzaPrice(key)+"$" )}</p></div></li>;
        	})} </ul>
        	<div className="total">
        		<h1>{(this.getTotal() == 0.00 ? "" : "Total: "+ this.getTotal()+"$")}</h1>
        	</div>

      	</div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
// Implement map dispatch to props
)(PizzaTotal)
