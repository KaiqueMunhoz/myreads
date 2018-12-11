import React from 'react'
import * as BooksAPI from '../../api/BooksAPI'

//Components
import ButtonSearch from '../ButtonSearch';
import ListBooksTitle from '../ListBooksTitle';
import Bookshelf from '../Bookshelf';

const titles = ["Current reading", "Want to read", "Read"]

let other = []

  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => this.setState({ books }))
    console.log(other)
  }
  
  render () {
    return (
      <div className="list-books">
        <ListBooksTitle />
        <div className="list-books-content">
          {titles.map(name => <Bookshelf title={name}/> )}
        </div>
        <ButtonSearch />
      </div>
    )
  }
}

export default ListBooks