
function searchAPI(ingredient){

        const headers = new Headers({
            "X-Mashape-Key": "myag4vesVomshRjyCEbIzvRB9AvXp1KEaP9jsnXpyENrKtvP2u",
            "Content-Type": "application/json",
            "Accept": "application/json"});
        const url = `https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?fillIngredients=false&ingredients=${ingredient}&limitLicense=false&number=5&ranking=1`
        return fetch(url, {headers})
            .then(recipes => recipes.json())
}

export default searchAPI