import React from 'react'
import SectionTitle from './common-components/SectionTitle'
import List from './common-components/List'
import ListItem from './common-components/ListItem'

function Ingredients({ extendedIngredients }) {
  const ingredients = extendedIngredients.map((ingredient) => (
    <ListItem key={ingredient.original} data={`• ${ingredient.original}`} />
  ))

  return (
    <section className="recipe__section">
      <SectionTitle type="INGREDIENTS" />
      <List type="unordered" items={ingredients} />
    </section>
  )
}

export default Ingredients
