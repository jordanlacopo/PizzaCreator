import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { PizzaAddition, PizzaSelection, deletePizza } from '../actions/index';

function mapStateToProps(state) {
  return {
  	pizza: state.pizza,
  	pizzaSelected: state.pizzaSelected
  };
}

export class PizzaAdd extends React.Component {


  constructor(props) {
    super(props);
    this.state = { isActive: 0 };
    this.props.PizzaAddition();
  }



  componentDidMount(){
  	var that = this;
  	setTimeout(function() {
         var pizza = that.props.pizza[0];
         that.SelectPizza(pizza, that.state.isActive)
    }, 300);
  	
  }

  delete = (pizza,index) =>{

  	this.props.deletePizza(pizza);
  	var pizza = this.props.pizza[index];
  	this.SelectPizza(pizza, index);

  };

  SelectPizza = (pizza,index) =>{
  	this.props.PizzaSelection(pizza);
  	this.setState({ isActive: index });

  };

  render() {

    return (
      <div className="addPizza">
      	<span className="add" onClick={this.props.PizzaAddition}>+ add pizza</span>
        <ul>{this.props.pizza.map((key, index) => {
          return <li key={index} className={this.state.isActive === index ? 'selected' : ''}><div><span onClick={()=>this.SelectPizza(key,index)}> {"Pizza "+(index+1)}</span><img onClick={()=>this.delete(key,index-1)} src="./src/images/close.svg" width = '15'/></div></li>;
        })} </ul>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ PizzaAddition, PizzaSelection, deletePizza }, dispatch);
}



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PizzaAdd)
