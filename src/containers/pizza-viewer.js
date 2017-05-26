import React from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
  	pizza: state.pizza,
  	pizzaSelected: state.pizzaSelected
  };
}

export class PizzaViewer extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
    	activePizza: 0,
    }
  }

  renderTopping = (key) =>{
    if (Object.keys(this.props.pizzaSelected).length !== 0) {

      if(key === this.props.pizzaSelected.pizzaId){
        let array = this.props.pizzaSelected.Toppings;
        let Size = this.props.pizzaSelected.Size
          var newarray =array.map((toppings,index)=>{
            var sectionStyle = {
              backgroundImage:`url(./src/images/${toppings}-top.png)`
            }
            return <div className={"toppings "+ Size+"-t"} style={ sectionStyle }></div>
          })
        return [...newarray];
      }
    }
    
  }

  render() {
    return (
      <div>
      	<div className="viewer-wrapper">

      	{this.props.pizza.map((key, index) => {
             console.log(key);
      		return <div key={index} className={"pizza-wrapper "+(key.pizzaId === this.props.pizzaSelected.pizzaId ? "selected" : "dis" )+" "+(key.Size !== "" ? `${key.Size}` :'')}>{this.renderTopping(key.pizzaId)}</div>
        })}

       


      	</div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
// Implement map dispatch to props
)(PizzaViewer)
