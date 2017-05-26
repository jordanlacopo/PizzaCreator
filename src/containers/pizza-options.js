import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { PizzaAddition, PizzaSelection, selectSize, selectToppings } from '../actions/index';

function mapStateToProps(state) {
  return {
  	pizza: state.pizza,
  	pizzaSelected: state.pizzaSelected
  };
}

export class PizzaOptions extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);

    this.state = {
    	sizes :["Small","Medium", "Large"],
    	sizeSelect: "",
      toppings:["Mushroom", "Olives", "Basil", "Pineapple", "Pepperonni","Shrimp", "Tomatto", "Peppers", "Onions"],
      selectTopp: false,
    }
  
  }

  componentDidUpdate(){
    this.props.pizzaSelected.Toppings;
  }

  
  selectSize =(obj)=>{
  	this.setState({sizeSelect: obj})
  	this.props.selectSize(obj,this.props.pizzaSelected);
  };

  selectTopping = (obj) =>{
    // console.log(obj, this.props.pizzaSelected)
    this.props.selectToppings(obj, this.props.pizzaSelected);
  };


  fetchToppings = (topping) =>{
    if (Object.keys(this.props.pizzaSelected).length !== 0) {
      var array = this.props.pizzaSelected.Toppings;

      for (var i = array.length - 1; i >= 0; i--) {
        var element = array[i];
        // console.log(element, topping);
        if(element === topping){
          return true;
        }else{
          // return false;
        }
      }
    
    }
  }

  render() {
    return (
      <div>
      	<div>
      		<h1>Size:</h1>
      		<div>
      			<ul className="size-wrapper">
      			{this.state.sizes.map((obj,index)=>{
           
      				return <div className="topp"><li key={index} onClick={()=>this.selectSize(obj)} className={this.props.pizzaSelected.Size === obj ? 'selected' : '' }>{obj}</li></div>
              
      			})
      			}
      			</ul>
      		</div>
          <h1 className={"top"}>Toppings:</h1>
          <div className={"wt"+(this.props.pizzaSelected.Size === "" ? '' : ' active')}>
            <ul className="size-wrapper-t">
              {this.state.toppings.map((obj,index)=>{
                  let image = `./src/images/${obj}.png`
                  return <div className="topp"><li key={obj} onClick={()=>this.selectTopping(obj)} className={ this.fetchToppings(obj) ? 'active' : 'no'}><img src={image} width = '15'/>{obj}</li></div>
                })
              }
            </ul>
          </div>
      	</div>

      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ PizzaAddition, selectSize, selectToppings  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PizzaOptions)
