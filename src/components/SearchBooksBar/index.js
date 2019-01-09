import React from 'react'
import './SearchBooksBar.css'
import PropTypes from 'prop-types'
import { debounce } from 'lodash'
//Router
import { Link } from 'react-router-dom'

const SearchBooksBar = (props) => {

  const {searchBooks} = props
  const getInputValue = debounce((value) => {
    return searchBooks(value)
  }, 500)

  return (
    <div className="search-books-bar">
      <Link to='/' className="close-search">Close</Link>
      <div className="search-books-input-wrapper">
        <input
        type="text"
        onChange={event => getInputValue(event.target.value.trim().toLowerCase())}
        placeholder="Search by title or author" />
      </div>
    </div>
  )
}

SearchBooksBar.propTypes = {
  searchBooks: PropTypes.func
}

export default SearchBooksBar