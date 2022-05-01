


const input = document.querySelector('#search_input')
const form = document.querySelector('form')
const searchicon = document.querySelector('#icon')
const container = document.querySelector('.recipe_container')

form.addEventListener('submit', displayrecipe)
searchicon.addEventListener('click', displayrecipe)

 function displayrecipe(event){
    event.preventDefault();
    const querry = input.value
   fetchdata(querry)

 }
   


function fetchdata(q){
    
const mainurl = `https://api.edamam.com/search?q=${q}&app_id=a6d62631&app_key=db65596bbd8f8d675d159c99933c8890&from=0&to=20`

fetch(mainurl).then( (res) => {
    return res.json()

}).then((result) => {
    console.log(result)
    displaylist(result.hits)

}).catch( (error) => {
  console.log('some error has occured',error) 
} )
}

 function displaylist(recipelist){
    container.innerHTML =" ";

     for (let i = 0; i < recipelist.length; i++) {
         const element = recipelist[i];
         const recipecontent=  `
        <div class="recipe_item">
           <img src="${element.recipe.img}" class="image" />
           <div class="flex-item">
           <p>${element.recipe.source}</p>
           <a href="${element.recipe.url}" >view items</a>
         </div>
         <div>
           <p>${element.recipe.label}</P> 
         </div>
        </div>`

        container.innerHTML += recipecontent
     }
 }