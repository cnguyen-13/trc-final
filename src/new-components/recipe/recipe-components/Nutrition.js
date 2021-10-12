import React from 'react'
import SectionTitle from './common-components/SectionTitle'
import Table from './common-components/Table'

function Nutrition({ nutrition }) {
  const { nutrients } = nutrition

  return (
    <section className="recipe__section">
      <SectionTitle type="NUTRITION" />
      <Table nutrients={nutrients} />
    </section>
  )
}

export default Nutrition
