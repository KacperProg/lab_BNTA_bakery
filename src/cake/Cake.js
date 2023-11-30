const Cake = ({cake}) => {

  return (
    <>
        <h2>{cake.cakeName}</h2>
        <ul>
          {cake.ingredients.map((ingredient) => <li>{ingredient}</li>)}
        </ul>
        <h2>{cake.price}</h2>
        <h2>{cake.rating}</h2>
    </>
  )
}

export default Cake;