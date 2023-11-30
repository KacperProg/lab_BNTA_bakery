const Cake = ({cake, onButtonClick}) => {

  const handleUserClick = () => {
    onButtonClick(cake.cakesSold)
  }

  return (
    <>
        <h2>Name: {cake.cakeName}</h2>
        <ul><b>Ingredients</b>: 
          {cake.ingredients.map((ingredient) => <li>{ingredient}</li>)}
        </ul>
        <h2>Price: £{cake.price}</h2>
        <h2>Rating: {cake.rating}</h2>
        <h2>Cakes sold: {cake.cakesSold}</h2>
        <button onClick={handleUserClick}>Purchase cake</button>
    </>
  )
}

export default Cake;