import React from 'react'
import './Search.css'
import PropTypes from 'prop-types'

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
    for (let bookSearched of booksSearched) {
      let book = this.props.books.find(book => book.id === bookSearched.id )
      if(book) {
        bookSearched.shelf = book.shelf
      }
    }
  }

  searchBooks = (query) => {
    BooksAPI.search(query).then(booksSearched => {
      if(!booksSearched) {
        this.setState({ booksSearched: [] })
        return 
      }
      this.updateShelfOf(booksSearched)
      this.setState({ booksSearched })
    })
    .catch(error => {
      console.log(`Error: ${error}`)
      this.setState({ booksSearched: [] })
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
      <div>
        <SearchBooksBar searchBooks={this.searchBooks}/>
        <div className="search-books-results">
          <ol className="books-grid">
          {books}
          </ol>
        </div>
      </div>
    )
  }
}

Search.propTypes = {
  moveBookshelf: PropTypes.func,
  books: PropTypes.arrayOf(PropTypes.object)
}

export default Search