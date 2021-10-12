import React from 'react'
import TableHeader from './TableHeader'
import TableBody from './TableBody'

function Table({ nutrients }) {
  return (
    <table className="recipe__table">
      <TableHeader />
      <TableBody nutrients={nutrients} />
    </table>
  )
}

export default Table
