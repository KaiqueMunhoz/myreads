import React from 'react'
import SearchBookBar from '../SearchBookBar'

const SearchBooks = () => {
  return (
    <div className="search-books">
      <SearchBookBar />
      <div className="search-books-results">
        <ol className="books-grid"></ol>
      </div>
    </div>
  )
}

export default SearchBooks