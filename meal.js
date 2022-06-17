const btn = document.querySelector('#btn');
const mealwrapper = document.querySelector('.meal-wrapper');

const fetchMeal = ()=>{
fetch('https://www.themealdb.com/api/json/v1/1/random.php')
.then(response => response.json())
.then(data => showMeal(data))
.catch(err => window.alert(err));
}

const showMeal = (data)=>{
    const { strMeal } = data.meals[0]
    const { strCategory } = data.meals[0];
    const { strArea } = data.meals[0];
    const { strInstructions } = data.meals[0];
    const { strMealThumb } = data.meals[0];
    const { strYoutube } = data.meals[0];
    
    const S = strYoutube.split('');
    let newS = ""
    for(let i=32; i<S.length; i++){
        newS+=S[i];
    }

   const meal = document.createElement('h2');
   meal.classList.add('meal-name','h2');
   meal.innerText = strMeal;
   meal.style.borderTop = "2px solid black";
   meal.style.marginTop='30px';
   mealwrapper.appendChild(meal);

   const category = document.createElement('h3');
   category.classList.add('category','h3');
   category.innerText = `Category: ${strCategory}`;
   mealwrapper.appendChild(category);


   const area = document.createElement('h3');
   area.classList.add('Area','h3');
   area.innerText = `Food-type: ${strArea}`;
   mealwrapper.appendChild(area);

   const instruc = document.createElement('p');
   instruc.classList.add('instructions','p');
   instruc.innerText = `Instructions:

   ${strInstructions}`;
   mealwrapper.appendChild(instruc);

   const photo = document.createElement('img');
   photo.classList.add('photo');
   photo.src = strMealThumb;
   mealwrapper.appendChild(photo);

   const youtube = document.createElement('iframe');
   youtube.classList.add('video');
   youtube.src = `https://www.youtube.com/embed/${newS}`;
   mealwrapper.appendChild(youtube);

}

btn.addEventListener('click',()=>{
    fetchMeal();
});




