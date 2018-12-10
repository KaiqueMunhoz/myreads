import React from 'react'
import * as BooksAPI from '../../api/BooksAPI'
import './Home.css'

//Components
import ListBooks from '../../components/ListBooks';

class Home extends React.Component {
  state = {
  }

  render() {
    return (
      <div className="app">
        <ListBooks />
      </div>
    )
  }
}

export default Home
