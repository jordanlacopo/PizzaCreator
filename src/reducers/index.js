import { combineReducers } from 'redux';

import PizzaAddition from './pizza-addition';

const rootReducer = combineReducers({
 	pizza : PizzaAddition
});

export default rootReducer;
