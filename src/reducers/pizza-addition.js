import { PIZZA_ADD } from '../actions/index';
import { PIZZA_SELECT } from '../actions/index';
import { PIZZA_DELETE } from '../actions/index';
import { SELECT_SIZE } from '../actions/index';
import { SELECT_TOP} from '../actions/index'





export default function(state = [], action) {
  switch (action.type) {

	case PIZZA_ADD:
		return [...state, action.payload];

	case PIZZA_DELETE:
		return state.filter(function(pizza){
		  return pizza.pizzaId != action.payload.pizzaId;
		});

	case SELECT_SIZE:
		 return state.map(pizza =>{
		 	console.log(pizza.pizzaId);
		 	if (pizza.pizzaId === action.payload.pizza.pizzaId ) {
		 		return Object.assign(pizza, {
          			Size: action.payload.size
        		})
		 	}else {
		 		return pizza;
		 	}
		 })
	case SELECT_TOP:
		return state.map(pizza =>{

			// for (var i = pizza.Toppings.length - 1; i >= 0; i--) {
			// 	if(pizza.Toppings[i] === action.payload.topping){

			// 	};
			// }
			var exist = false;

			pizza.Toppings.filter(function(topping){
				if(pizza === action.payload.pizza){
			  		if(topping === action.payload.topping){
			  			console.log("bb")
			  			exist = true;
			  		}
			  	}
			});
	
			if(!exist){
			 	if (pizza.pizzaId === action.payload.pizza.pizzaId ) {
			 		return Object.assign(pizza, {
	          			Toppings: [...pizza.Toppings,action.payload.topping]
	        		})
			 	}else {
			 		return pizza;
			 	}
		 	}else {
		 		if(pizza === action.payload.pizza){
		 			console.log(action.payload.pizza);
			 		var newArray = pizza.Toppings.filter((top)=>{
			 			return top !== action.payload.topping
			 		});
			 		return Object.assign(pizza, {
		          			Toppings: [...newArray]
		        		})
			 	}
		 	}
		 })
	}	
		
  return state;
}