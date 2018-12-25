import React from 'react'
import './SearchBooks.css'

//API
import * as BooksAPI from '../../api/BooksAPI'

//Components
import SearchBooksBar from '../SearchBooksBar'
import Book from '../Book'


class SearchBooks extends React.Component {

  render() {
    return (
      <div className="search-books">
        <SearchBooksBar />
        <div className="search-books-results">
          <ol className="books-grid"></ol>
        </div>
      </div>
    )
  }
}

export default SearchBooks