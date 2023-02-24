const loadMeal = (searchText) => {
const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
fetch(url)
.then(res => res.json())
.then(data => displayMeals(data.meals))
}

const displayMeals = meals =>{
  
  const mealsContainer = document.getElementById('meals-container');
  mealsContainer.innerHTML = '';
  meals.forEach(meal =>{
    
  // console.log(meal)
  const mealDiv = document.createElement('div');
  mealDiv.classList.add('col');
  
    mealDiv.innerHTML = `
    <div class="card h-100">
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${meal.strMeal}</h5>
      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
    <button onclick="loadMealDetail(${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mealsDetailsModal">Details</button>
    `;
    mealsContainer.appendChild(mealDiv);
})
}

const searchMeal = () =>{
  const searchText = document.getElementById('search-field').value;
  loadMeal(searchText)
}
const loadMealDetail = async(idMeal) =>{
const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
try{
const res = await fetch(url);
const data = await res.json();
displayMealsDetails (data.meals[0])
}
catch(error){
  console.log(error)
 }
}

const displayMealsDetails = meal =>{
document.getElementById('exampleModalLabel').innerText = meal.strMeal;
const mealDetails = document.getElementById('mealsDetailsBody');
mealDetails.innerHTML = ` 
<img class= "img-fluid" src="${meal.strMealThumb}">

`
}
loadMeal('fish');