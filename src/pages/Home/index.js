import React from 'react'
import './Home.css'

//API
import * as BooksAPI from '../../api/BooksAPI' 

//Components
import ButtonSearch from '../../components/ButtonSearch';
import ListBooksTitle from '../../components/ListBooksTitle';
import Bookshelf from '../../components/Bookshelf';

//Model
import shelfs from '../../model/shelfs'

class Home extends React.Component {

  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => this.setState({ books }))
  }

  filterBooksByShelf = (apiValue) => this.state.books.filter(book =>  book.shelf === apiValue )
  

  moveBookshelf = (event, bookChanged) => {
    const shelf = event.target.value

    if(shelf !== "none") {
      BooksAPI.update(bookChanged, shelf)
      bookChanged.shelf = shelf

      this.setState({
        books: this.state.books.filter(book => book.id !== bookChanged.id)
                               .concat([bookChanged])
      })
    }
  }
  
  render () {
    return (
      <div className="app">
        <div className="list-books">
        <ListBooksTitle />
        <div className="list-books-content">
          {shelfs.map(shelf => {
            const books = this.filterBooksByShelf(shelf.apiValue)
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
    </div>
    )
  }
}

export default Home