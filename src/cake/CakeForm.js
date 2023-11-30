import {useState} from "react";

const CakeForm = ({onNewCakeSubmission}) => {

    const [cakeName, setCakeName] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [price, setPrice] = useState(0);
    const [rating, setRating] = useState(0);

    const updateCakeName = (event) => {
        setCakeName(event.target.value);
    }
    
    const updateIngredients = (event) => {
        setIngredients(event.target.value);
    }
    
    const updatePrice = (event) => {
        setPrice(event.target.value);
    }
    
    const updateRating = (event) => {
        setRating(event.target.value);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const newCake = {
            cakeName: cakeName,
            ingredients: ingredients.split(","),
            price: price,
            rating: rating
        }
        setCakeName("")
        setIngredients("")
        setPrice(0)
        setRating(0)
        onNewCakeSubmission(newCake)
    }

    return (
        <section>
            <h2>Add a new cake:</h2>
            <form onSubmit={(event) => handleFormSubmit(event)}>
            <label htmlFor="cakeName-input">Name:</label>
                <input
                type="text" 
                id="cakeName-input"
                onInput={(event) => updateCakeName(event)}
                />
                <label htmlFor="ingredients-input">Ingredients:</label>
                <input
                type="text" 
                id="ingredients-input"
                onInput={(event) => updateIngredients(event)}
                />
                <label htmlFor="price-input">Price:</label>
                <input
                type="number" 
                min="0"
                id="price-input"
                onInput={(event) => updatePrice(event)}
                />
                <label htmlFor="rating-input">Rating:</label>
                <input
                type="range" 
                min="0"
                max="10"
                id="rating-input"
                onInput={(event) => updateRating(event)}
                />
                <input type="submit" value="Add new cake :D"/>
                
            </form>
        </section>
      )
}
 
export default CakeForm