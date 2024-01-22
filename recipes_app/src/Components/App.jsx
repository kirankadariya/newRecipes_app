import {useState, useEffect } from "react"
import Recipe from './Recipe.jsx'

export default function App (){
const[categories, setcategories] =useState([])
const [recipes, setRecipes]= useState([])
const [selectedCategory, setSelectedCategory]= useState("Beef")

useEffect(() =>{
    const url = "https://www.themealdb.com/api/json/v1/1/categories.php"
    fetch(url)
    .then (response=>response.json())
    .then (data=>setcategories(data.categories))
    .catch(error=>console.error("Error:", error))
},[]);

useEffect(() =>{
    fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=' + selectedCategory)
    .then (response=>response.json())
    .then(data=>setRecipes(data.meals))
    .catch(error=>console.error("Error:", error))


},[selectedCategory]);

const handleSelectedchange = (event)=>{
  setSelectedCategory(event.target.value);
}




    return  (<>
    <h1>My Recipes App</h1>
    <div className="category">
      <label htmlFor="categorySelect"> Select Category:</label>
      <select id="categorySelect" value={selectedCategory} onChange={handleSelectedchange}> {
        categories.map(category=>(
        <option value={category.strCategory} key={category.idcategory}>{category.strCategory}</option>
      ))}
        
      </select>
    </div>
    <div className="container">
      {recipes.map(recipe=>
      (<Recipe data={recipe} key= {recipe.idMeal}/>
      ))}
    </div>
    </>
    )

}



