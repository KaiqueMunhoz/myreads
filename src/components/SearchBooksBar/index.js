import React from 'react'
import './SearchBooksBar.css'
import PropTypes from 'prop-types'

//Router
import { Link } from 'react-router-dom'

const SearchBooksBar = (props) => {

  const {searchBooks} = props
  const getInputValue = (event) => {
    const value = event.target.value.trim().toLowerCase()
    return searchBooks(value)
  }

  return (
    <div className="search-books-bar">
      <Link to='/' className="close-search">Close</Link>
      <div className="search-books-input-wrapper">
        <input
        type="text"
        onChange={getInputValue}
        placeholder="Search by title or author" />
      </div>
    </div>
  )
}

SearchBooksBar.propTypes = {
  searchBooks: PropTypes.func
}

export default SearchBooksBar