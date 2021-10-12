import React from 'react'
import useSectionTitle from '../../../../custom-hooks/useSectionTitle'

function SectionTitle({ type }) {
  const title = useSectionTitle(type)

  return <h2 className="recipe__title">{title}</h2>
}

export default SectionTitle
