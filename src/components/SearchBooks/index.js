import React from 'react'
import SearchBooksBar from '../SearchBooksBar'

const SearchBooks = () => {
  return (
    <div className="search-books">
      <SearchBooksBar />
      <div className="search-books-results">
        <ol className="books-grid"></ol>
      </div>
    </div>
  )
}

export default SearchBooks