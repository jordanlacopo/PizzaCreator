import { combineReducers } from 'redux';

import PizzaAddition from './pizza-addition';
import PizzaSelected from './pizza-selected';

const rootReducer = combineReducers({
 	pizza : PizzaAddition,
 	pizzaSelected: PizzaSelected
});

export default rootReducer;
