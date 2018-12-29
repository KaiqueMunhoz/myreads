import React from 'react'
import './Home.css'

//Components
import ButtonSearch from '../../components/ButtonSearch';
import ListBooksTitle from '../../components/ListBooksTitle';
import Bookshelf from '../../components/Bookshelf';

//Model
import shelfs from '../../model/shelfs'

class Home extends React.Component {

  filterBooksByShelf = (apiValue) => this.props.books.filter(book =>  book.shelf === apiValue )
  
  render () {

    const {moveBookshelf} = this.props

    return (
      <div className="app">
        <div className="list-books">
        <ListBooksTitle />
        <div className="list-books-content">
          {shelfs.map(shelf => {
            const books = this.filterBooksByShelf(shelf.apiValue)
            return shelf.apiValue !== 'none' &&
              <Bookshelf 
                books={books}
                key={shelf.title + shelf.apiValue}
                moveBookshelf={moveBookshelf}
                title={shelf.title} /> 
            })
          })}
        </div>
        <ButtonSearch />
      </div>
    </div>
    )
  }
}

export default Home