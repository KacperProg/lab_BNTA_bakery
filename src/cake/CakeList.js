import Cake from "./Cake";
const CakeList = ({cakes}) => {    
   
    const onButtonClick = () =>

    const cakeComponents = cakes.map((cake) => {
        return <Cake cake={cake} onButtonClick={onButtonClick}/>
    })

    return(
        <section>
            <h2>Cakes</h2>
            {cakeComponents}
        </section>
      );
}
 
export default CakeList;