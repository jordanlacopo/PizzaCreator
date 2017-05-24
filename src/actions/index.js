
/*----------  Add Pizza  ----------*/

export const PIZZA_ADD = 'PIZZA_ADD';
export const PIZZA_SELECT = 'PIZZA_SELECT';
export const PIZZA_DELETE = 'PIZZA_DELETE';
export const SELECT_SIZE = 'SELECT_SIZE';
export const SELECT_TOP = 'SELECT_TOP';


var id = 0;

export function selectSize(size,pizza){
	return {
		type: SELECT_SIZE,
		payload: {size,pizza}
	};
}

export function selectToppings(topping,pizza){

	return{
		type: SELECT_TOP,
		payload: {topping,pizza}
	}

}
export function PizzaAddition(){



	const pizza = {
		"pizzaId": id,
		"Toppings":[],
		"Size":"",
		"selected": false
	};

	id++;

	return {
		type: PIZZA_ADD,
		payload: pizza
	};

}


export function PizzaSelection(selected){


	return {
		type: PIZZA_SELECT,
		payload: selected
	};

}

export function deletePizza(selected){


	return {
		type: PIZZA_DELETE,
		payload: selected
	};

}