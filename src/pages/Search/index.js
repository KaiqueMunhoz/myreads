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
    booksSearched.forEach(bookSearched => {
      this.props.books.forEach(book => {
        if(book.id === bookSearched.id) {
          bookSearched.shelf = book.shelf
        }
      }) 
    })
  }

  searchBooks = (query) => {
    BooksAPI.search(query).then(booksSearched => {
      if(!booksSearched) {
        this.setState({ booksSearched: [] })
        return 
      }
      this.updateShelfOf(booksSearched)
      this.setState({ booksSearched: booksSearched })
    })
    .catch(error => {
      if(error) {
        this.setState({ booksSearched: [] })
      }
    })
  }
  
  render() {
    const {booksSearched} = this.state
    const {moveBookshelf} = this.props
    const books = booksSearched.length &&
                  booksSearched.map(book => 
                  <Book 
                    book={book}
                    key={book.id}
                    moveBookshelf={moveBookshelf}  />
                  )
          
    return (
      <div className="search-books">
        <SearchBooksBar searchBooks={this.searchBooks}/>
        <div className="search-books-results">
          <ol className="books-grid">
          { books }
          </ol>
        </div>
      </div>
    )
  }
}

export default Search