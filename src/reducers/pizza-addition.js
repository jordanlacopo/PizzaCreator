import { PIZZA_ADD } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
  case PIZZA_ADD:
    return [...state, action.payload];
  }
  return state;
}