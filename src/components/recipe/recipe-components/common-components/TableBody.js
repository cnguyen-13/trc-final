import React from 'react'
import TableRow from './TableRow'

function TableBody({ nutrients }) {
  const tableRows = nutrients.map(
    ({ name, amount, unit, percentOfDailyNeeds }) => {
      return (
        <TableRow
          name={name}
          amount={amount}
          unit={unit}
          percentOfDailyNeeds={percentOfDailyNeeds}
          key={name}
        />
      )
    }
  )

  return <tbody className="recipe__table-section">{tableRows}</tbody>
}

export default TableBody
