import React from 'react'
import * as BooksAPI from '../../api/BooksAPI'

//Components
import ButtonSearch from '../ButtonSearch';
import ListBooksTitle from '../ListBooksTitle';
import Bookshelf from '../Bookshelf';

const shelfs = [
  {
    title: "Current reading",
    apiValue: "currentlyReading"
  },
  {
    title: "Want to read",
    apiValue: "wantToRead"
  },
  {
    title: "Read",
    apiValue: "read"
  }
]

class ListBooks extends React.Component {

  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => this.setState({ books }))
  }

  filterBooks = (apiValue) => {
    return this.state.books.filter(book => {
      return book.shelf === apiValue
    })
  }

  moveBookshelf = (event, book) => {
    const shelf = event.target.value
    
    if(shelf !== "none") {
      console.log('book: ' + book)
      console.log('book: ' + shelf)
      BooksAPI.update(book, shelf)
    }
  }
  
  render () {
    return (
      <div className="list-books">
        <ListBooksTitle />
        <div className="list-books-content">
          {shelfs.map(shelf => {
            const books = this.filterBooks(shelf.apiValue)
            return ( 
              <Bookshelf 
                books={books}
                key={shelf.title + shelf.apiValue}
                moveBookshelf={this.moveBookshelf}
                title={shelf.title} /> 
            )
          })}
        </div>
        <ButtonSearch />
      </div>
    )
  }
}

export default ListBooks