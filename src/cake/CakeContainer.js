import { useState } from "react";
import cakes from "./cakes.js";
import CakeList from "./CakeList.js";
import CakeForm from "./CakeForm.js";

const CakeContainer = () => {

const [listOfCakes, setListOfCakes] = useState(cakes)

const handleNewCakeSubmission = (newCake) => {
	const updatedCakes =  [...listOfCakes];
	updatedCakes.push(newCake);
	setListOfCakes(updatedCakes);
}

return (
    <>
		<h1>BNTA BAKERY</h1>
		<CakeForm onNewCakeSubmission={handleNewCakeSubmission}/>
        <CakeList cakes={listOfCakes}/>
    </>
  )
}

export default CakeContainer;