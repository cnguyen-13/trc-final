import React from 'react'

function RecipeFigure({ src, title, summary }) {
  return (
    <figure className="recipe__figure">
      <img className="recipe__image" src={src} alt={title} />
      <figcaption className="recipe__caption">{summary}</figcaption>
    </figure>
  )
}

export default RecipeFigure
