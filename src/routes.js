import React from 'react';
import { Route, Switch } from 'react-router-dom';

//API
import * as BooksAPI from './api/BooksAPI' 

//Components
import Home from './pages/Home'
import Search from './pages/Search'

class Routes extends React.Component {

  state = {
    books : []
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
    return (
      <Switch>
        <Route path='/' exact render={() => (
            <Home moveBookshelf={this.moveBookshelf}/>
        )} />
        <Route path='/search' render={() => (
            <Search moveBookshelf={this.moveBookshelf}/>
        )} />
      </Switch>
    );
  }
}

export default Routes;