export default function Drinks(props) {

  return (
    <div>
    <h1>Drink list:</h1>
    {props.drinks.map((drink)=>(
      <div key={drink._id}>
      <h2>Name: {drink.name}</h2>
      <h2>Caffiene Type: {drink.caffieneType}</h2>
      <h2>How good is it?: {drink.levelOfEffectiveness}</h2>
      <h2>image: {drink.image}</h2>
      <h2>description: {drink.description}</h2>
      <h2>How much Caffiene: {drink.caffieneLevel}</h2>
      </div>
    ))}
   
    </div>
      
  )
}
