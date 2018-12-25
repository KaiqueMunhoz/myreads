import React from 'react'
import './SearchBooksBar.css'
import { Link } from 'react-router-dom'

const SearchBooksBar = (props) => {

  const {searchBooks} = props

  return (
    <div className="search-books-bar">
      <Link to='/' className="close-search">Close</Link>
      <div className="search-books-input-wrapper">
        <input
        type="text"
        onChange={searchBooks}
        placeholder="Search by title or author" />
      </div>
    </div>
  )
}

export default SearchBooksBar