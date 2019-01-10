import React from 'react'
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
    <div className="input-group input-group-lg">
      <div className="input-group-prepend">
        <Link to='/' className="btn btn-outline-secondary">Back</Link>
      </div>
      <input
      className="form-control"
      type="text"
      onChange={event => getInputValue(event.target.value.trim().toLowerCase())}
      placeholder="Search by title or author" 
      aria-label="Search by title or author" 
      aria-describedby="basic-addon2"/>
    </div>
  )
}

SearchBooksBar.propTypes = {
  searchBooks: PropTypes.func
}

export default SearchBooksBar