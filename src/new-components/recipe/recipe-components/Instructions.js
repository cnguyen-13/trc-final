import React from 'react'
import SectionTitle from './common-components/SectionTitle'
import List from './common-components/List'
import ListItem from './common-components/ListItem'

function Instructions({ analyzedInstructions }) {
  const steps = analyzedInstructions[0].steps.map(({ number, step }) => {
    return <ListItem key={number} data={`${number}. ${step}`} />
  })

  return (
    <section className="recipe__section">
      <SectionTitle type="INSTRUCTIONS" />
      <List type="ordered" items={steps} />
    </section>
  )
}

export default Instructions
