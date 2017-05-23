
/*----------  Add Pizza  ----------*/

export const PIZZA_ADD = 'PIZZA_ADD';

export const pizza = [{
	"Toppings":[],
	"Size":"",
}]

export function PizzaAddition(){
  
  return {
    type: PIZZA_ADD,
    payload: pizza
  };

}


export function PizzaSelection(){

	

}