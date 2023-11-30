import Cake from "./Cake";
const CakeList = ({cakes}) => {    
   
    const cakeComponents = cakes.map((cake) => {
        return <Cake cake={cake}/>
    })

    return(
        <section>
            <h2>Cakes</h2>
            {cakeComponents}
        </section>
      );
}
 
export default CakeList;