const searchBox = document.querySelector('.searchBox');
const searchBtn = document.querySelector('.searchBtn');
const recipeContainer = document.querySelector('.recipe-container');


//Function to get recipe 
const fetchRecipes = async (query) =>{
    const data = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=${query}');
    const response = await data.json();

    response.meals.forEach(meal=>{
     const recipeDev = document.createElement('div');
     recipeDev.classList.add(recipe);
     recipeDiv.innerHTML =
        <img src ="${meal.strMealThumb}"></img>
        
    recipeContainer.appendChild(recipeDev);

    });
    
}

searchBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    const searchInput = searchBox.value.trim();
    fetchRecipes(searchInput);
   // console.log("Button Clicked");
});