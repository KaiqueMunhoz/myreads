import React from 'react'
import Routes from './routes'

//API
import * as BooksAPI from './api/BooksAPI' 

class App extends React.Component {

  state = {
    books : []
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => this.setState({ books })).catch(error => console.log(`Error: ${error}`))
  }

  moveBookshelf = (shelf, bookChanged) => {
    if(shelf !== "none") {
      BooksAPI.update(bookChanged, shelf)
      bookChanged.shelf = shelf

      this.setState({
        books: this.state.books.filter(book => book.id !== bookChanged.id)
                               .concat([bookChanged])
      })
    }
  }

  render() {
    const {books} = this.state
    return (
      <Routes books={books} moveBookshelf={this.moveBookshelf}/>
    )
  }
}

export default App