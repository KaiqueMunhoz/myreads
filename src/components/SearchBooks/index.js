import React from 'react'
import './SearchBooks.css'

//API
import * as BooksAPI from '../../api/BooksAPI'

//Components
import SearchBooksBar from '../SearchBooksBar'
import Book from '../Book'


class SearchBooks extends React.Component {

  state = {
    books : []
  }

  searchBooks = (event) => {
    const query = event.target.value.trim()
    console.log('query: ' + query)
    
    BooksAPI.search(query)
    .then(books => {
      
      if(books !== undefined) {
        this.setState({ books: books })
      }
    })
    .catch(err => alert(err))
  }
  
  render() {
    console.log('render')
    const {books} = this.state
    return (
      <div className="search-books">
        <SearchBooksBar searchBooks={this.searchBooks}/>
        <div className="search-books-results">
          <ol className="books-grid">
          { books.length &&
            books.map(book => 
            <Book 
              book={book}
              key={book.id} />
              // moveBookshelf={moveBookshelf} 
          )}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBooks