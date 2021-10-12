import React from 'react'
import Instructions from './recipe-components/Instructions'
import Ingredients from './recipe-components/Ingredients'
import Nutrition from './recipe-components/Nutrition'

function Recipe({ selectedRecipe }) {
  const { analyzedInstructions, extendedIngredients, nutrition } =
    selectedRecipe
  return (
    <div className="recipe__information">
      <Ingredients extendedIngredients={extendedIngredients} />
      <Instructions analyzedInstructions={analyzedInstructions} />
      <Nutrition nutrition={nutrition} />
    </div>
  )
}

export default Recipe
