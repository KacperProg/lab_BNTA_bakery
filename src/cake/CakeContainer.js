import { useState } from "react";
import cakes from "./cakes.js";
import CakeList from "./CakeList.js";
import CakeForm from "./CakeForm.js";
import Cake from "./Cake.js";

const CakeContainer = () => {

const [listOfCakes, setListOfCakes] = useState([
	{
		cakeName: "Victoria Sponge",
		ingredients: [
			"eggs",
			"butter",
			"sugar",
			"self-raising flour",
			"baking powder",
			"milk"
		],
		price: 5,
		rating: 5,
		cakesSold: 0
	},

	// Tea Loaf
	{
		cakeName: "Tea Loaf",
		ingredients: [
			"eggs",
			"oil",
			"dried fruit",
			"sugar",
			"self-raising flour",
			"strong tea",
		],
		price: 2,
		rating: 3,
		cakesSold: 0
	},

	// Carrot Cake
	{
		cakeName: "Carrot Cake",
		ingredients: [
			"carrots",
			"walnuts",
			"oil",
			"cream cheese",
			"flour",
			"sugar",
		],
		price: 8,
		rating: 5,
		cakesSold: 0
	}
])

const handleNewCakeSubmission = (newCake) => {
	const updatedCakes =  [...listOfCakes];
	updatedCakes.push(newCake);
	setListOfCakes(updatedCakes);
}

// const [cake, setCake] = useState(Cake);

// const sellCake = (cakesSold) => {
// 	cakesSold ++;
// 	setCake(cake.cakesSold);
// }

return (
    <>
		<h1>BNTA BAKERY</h1>
		<CakeForm onNewCakeSubmission={handleNewCakeSubmission}/>
		<hr/>
        <CakeList cakes={listOfCakes} />
    </>
  )
}

export default CakeContainer;