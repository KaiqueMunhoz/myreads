import React from 'react'
import { Link } from 'react-router-dom'

const ButtonOpenSearch = () => {
  return (
    <div className="open-search">
      <Link to='/search' className="open-search">Add a book</Link>
    </div>
  )
}

export default ButtonOpenSearch