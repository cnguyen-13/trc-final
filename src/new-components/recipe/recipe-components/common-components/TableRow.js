import React from 'react'

function TableRow({ name, amount, unit, percentOfDailyNeeds }) {
  return (
    <tr className="recipe__table-row">
      <td className="recipe__table-cell">{name}</td>
      <td className="recipe__table-cell">{`${Math.round(amount)}${unit}`}</td>
      <td className="recipe__table-cell">{`${Math.round(
        percentOfDailyNeeds
      )}%`}</td>
    </tr>
  )
}

export default TableRow
