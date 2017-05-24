
import { PIZZA_SELECT } from '../actions/index';

export default function(state={}, action) {
  switch (action.type) {

	case PIZZA_SELECT:
	
		return action.payload;
			
  }
  return state;
}