import React from 'react'

const Recipe = ({recipes}) => (
    <div> {recipes.map(recipe =>
        <div key={recipe.id}>
            <h1>{recipe.title} </h1>
            <img src={recipe.image}/>
        </div>)}
    </div>
);

export default Recipe;