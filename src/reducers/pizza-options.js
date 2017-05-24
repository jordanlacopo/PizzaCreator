
import { SELECT_SIZE } from '../actions/index';

export default function(state={}, action) {
  switch (action.type) {

	case SELECT_SIZE:
	
		return action.payload;
			
  }
  return state;
}