import React from 'react'

//Components
import SearchBooksBar from '../SearchBooksBar'

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