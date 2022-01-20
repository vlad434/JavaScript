const genBtn = document.querySelector('.meal-gen-btn');
const midContainer = document.querySelector('.middle-container');
const video = document.querySelector('.video_of_recipe');

genBtn.addEventListener('click', () => {
  midContainer.classList.remove('hide');
  getRecipe();
});

async function getRecipe() {
  const response = await fetch(
    'https://www.themealdb.com/api/json/v1/1/random.php'
  );

  const recipe = await response.json();
  const data = recipe.meals[0];
  console.log(data);
  const ingredients = [];

  for (let i = 1; i <= 20; i++) {
    if (data[`strIngredient${i}`]) {
      ingredients.push(
        `${data[`strIngredient${i}`]} - ${data[`strMeasure${i}`]}`
      );
    } else {
      // Stop if no more ingredients
      break;
    }
  }

  // console.log(ingredients);

  let output = `
      <div class="instructions">
          <h1 class="recipe-title">
            ${data.strMeal}
          </h1>
            <textarea
              name="recipe"
              class="recipe-text"
              cols="30"
              rows="10"
              disabled>
              ${data.strInstructions}
            </textarea>
    </div>

    <div class="recipe-details">
      <img src="${data.strMealThumb}" alt="recipe image" class="recipe-image" />
      <div class="category">
        <span class="category-text">Category: </span>
        <p class="category-value">${data.strCategory}</p>
      </div>
      <div class="category">
        <span class="category-text">Area:</span>
        <p class="category-value"> ${data.strArea}</p>
      </div>
      <h3>Ingredients:</h3>
      <ul>
        ${ingredients.map((ingredient) => `<li>${ingredient}</li>`).join('')}
      </ul>
    </div>
      `;
  midContainer.innerHTML = output;

  // let videoContainer = `
  // <iframe
  //   class="video"
  //   src="https://www.youtube.com/embed/${data.strYoutube.slice(-11)}">
  // </iframe>
  // `;
  // video.innerHTML = videoContainer;
}
