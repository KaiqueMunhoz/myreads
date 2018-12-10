import React from 'react'
import { Link } from 'react-router-dom'

const ButtonSearch = () => {
  return (
    <div className="open-search">
      <Link to='/search' className="open-search">Add a book</Link>
    </div>
  )
}

export default ButtonSearch