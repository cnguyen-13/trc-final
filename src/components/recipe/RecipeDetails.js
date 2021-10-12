import React from 'react'
import RecipeFigure from './RecipeFigure'
import Recipe from './Recipe'
import useHTMLParser from '../../custom-hooks/useHTMLParser'
import useLargerImage from '../../custom-hooks/useLargerImage'

function RecipeDetails({ recipe }) {
  const parsedText = useHTMLParser(recipe.summary)
  const [source, title] = useLargerImage(recipe)

  return (
    <section className="recipe">
      <RecipeFigure src={source} title={title} summary={parsedText} />
      <Recipe selectedRecipe={recipe} />
    </section>
  )
}

export default RecipeDetails
