import React from 'react'

function TableHeader() {
  return (
    <thead className="recipe__table-section">
      <tr className="recipe__table-row">
        <th className="recipe__table-cell" scope="col">
          Nutrient
        </th>
        <th className="recipe__table-cell" scope="col">
          Amount
        </th>
        <th className="recipe__table-cell" scope="col">
          % Daily Needs
        </th>
      </tr>
    </thead>
  )
}

export default TableHeader
