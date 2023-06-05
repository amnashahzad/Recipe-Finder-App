const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const resultsContainer = document.getElementById('results-container');

searchButton.addEventListener('click', searchRecipes);

function searchRecipes() {
  const query = searchInput.value;
  const apiUrl = `https://api.example.com/recipes?search=${query}`;

  // Make a request to the API
  fetch('response.json')
  .then(response => response.json())
  .then(data => {
    // Use the data from the JSON file
    const searchQuery = 'chicken'; // Replace with the actual search query
    const matchingRecipes = filterRecipes(data.recipes, searchQuery);
    displayRecipes(matchingRecipes);
  })
  .catch(error => console.log(error));

function filterRecipes(recipes, searchQuery) {
  // Filter the recipes based on the search query
  return recipes.filter(recipe => recipe.title.toLowerCase().includes(searchQuery.toLowerCase()));
}

function displayRecipes(recipes) {
  // Clear the existing content
  document.getElementById('results-container').innerHTML = '';

  // Loop through the matching recipes and display them
  recipes.forEach(recipe => {
    const recipeCard = document.createElement('div');
    recipeCard.classList.add('recipe-card');

    const title = document.createElement('h2');
    title.textContent = recipe.title;

    const ingredients = document.createElement('ul');
    recipe.ingredients.forEach(ingredient => {
      const li = document.createElement('li');
      li.textContent = ingredient;
      ingredients.appendChild(li);
    });

    recipeCard.appendChild(title);
    recipeCard.appendChild(ingredients);

    document.getElementById('results-container').appendChild(recipeCard);
  });
}



}
