import { NavLink } from "react-router-dom"

const Home=()=>{
  return (
    <div className="home">
      <h1>Welcome to {"insert name later"}</h1>
      <h2>On this website you will be able to look up you favorite kinds of caffienated drinks!</h2>
      <h3>Can't find a drink you like? simple fill out
      <NavLink
      id="home"
       to={{
      pathname:`/AddDrink`
     }}> This Form (Click here!) </NavLink>
          and add it to our list!</h3>
      <h4>Like a drink you see? Leave a comment on it and let others know!</h4>
    </div>
  )
}

export default Home
