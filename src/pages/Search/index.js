import React from 'react'
import './Search.css'

//API
import * as BooksAPI from '../../api/BooksAPI' 

//Components
import SearchBooksBar from '../../components/SearchBooksBar'
import Book from '../../components/Book'


class Search extends React.Component {

  state = {
    booksSearched : []
  }

  updateShelfOf = (booksSearched) => {
    booksSearched.map(bookSearched => {
      this.props.books.forEach(book => {
        if(book.id === bookSearched.id) {
          bookSearched.shelf = book.shelf
        }
      }) 
    })
  }

  searchBooks = (query) => {
    BooksAPI.search(query).then(booksSearched => {
      if(booksSearched !== undefined) {
        this.updateShelfOf(booksSearched)
        this.setState({ booksSearched: booksSearched })
      } else {
        this.setState({ booksSearched: [] })
      }
    })
    .catch(err => alert(err))
  }
  
  render() {
    const {booksSearched} = this.state
    const {moveBookshelf} = this.props
    
    return (
      <div className="search-books">
        <SearchBooksBar searchBooks={this.searchBooks}/>
        <div className="search-books-results">
          <ol className="books-grid">
          { booksSearched.length &&
            booksSearched.map(book => 
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