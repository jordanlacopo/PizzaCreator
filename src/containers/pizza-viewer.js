import React from 'react';
import { connect } from 'react-redux';

//import prices

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
      toppings:["Mushroom", "Olives", "Basil", "Pineapple", "Pepperonni","Shrimp", "Tomatto", "Peppers", "Onions"],
    }

  }


  renderTopping  = (key) => {

    if (Object.keys(this.props.pizzaSelected).length !== 0) {
      if(key === this.props.pizzaSelected.pizzaId){
        return this.state.toppings.map((top)=>{

          let Size = this.props.pizzaSelected.Size;
          let array = this.props.pizzaSelected.Toppings;
          let active = false;
          for (var i = array.length - 1; i >= 0; i--) {
            if(array[i] === top){
              active = true;
            }
          }
          var sectionStyle = {
                  backgroundImage:`url(./src/images/${top}-top.png)`
          }
         return <div className={"toppings "+ Size+"-t dis"+( active ?" active" :" ")} style={ sectionStyle }></div>
        })
      }
    }

  }

  render() {
    return (
      <div>
      	<div className="viewer-wrapper">

      	{this.props.pizza.map((key, index) => {
      		return <div key={index} className={"pizza-wrapper "+(key.pizzaId === this.props.pizzaSelected.pizzaId ? "selected" : "dis" )+" "+(key.Size !== "" ? `${key.Size}` :'')}>
          {
            this.renderTopping (key.pizzaId)

          }
          </div>
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
