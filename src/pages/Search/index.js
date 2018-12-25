import React from 'react'
import './Search.css'

//API
import * as BooksAPI from '../../api/BooksAPI' 

//Components
import SearchBooksBar from '../../components/SearchBooksBar'
import Book from '../../components/Book'


class Search extends React.Component {

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
    const {books} = this.state
    const {moveBookshelf} = this.props
    return (
      <div className="search-books">
        <SearchBooksBar searchBooks={this.searchBooks}/>
        <div className="search-books-results">
          <ol className="books-grid">
          { books.length &&
            books.map(book => 
            <Book 
              book={book}
              key={book.id}
              moveBookshelf={moveBookshelf}  />
          )}
          </ol>
        </div>
      </div>
    )
  }
}

export default Search