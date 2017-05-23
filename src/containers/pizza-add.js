import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { PizzaAddition } from '../actions/index';

function mapStateToProps({pizza}) {
  return {pizza};
}

export class PizzaAdd extends React.Component {


  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.props.PizzaAddition();

  }

  renderPizzaList = (pizza) =>{
    
  }

  render() {
    return (
      <div className="addPizza">
      	<span className="add" onClick={this.props.PizzaAddition}>+ add pizza</span>
        <ul>{this.props.pizza.map((key, index) => {
          return <li key={index}> {"Pizza "+(index+1)}</li>;
        })} </ul>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ PizzaAddition }, dispatch);
}



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PizzaAdd)
