import React from 'react'
import './Home.css'

//Components
import ButtonSearch from '../../components/ButtonSearch';
import ListBooksTitle from '../../components/ListBooksTitle';
import Bookshelf from '../../components/Bookshelf';

//Model
import shelfs from '../../model/shelfs'

const Home = (props) => {

    const {moveBookshelf} = props

    const filterBooksByShelf = (apiValue) => props.books.filter(book =>  book.shelf === apiValue )    
    
    return (
      <div className="app">
        <div className="list-books">
        <ListBooksTitle />
        <div className="list-books-content">
          {shelfs.map(shelf => {
            const books = filterBooksByShelf(shelf.apiValue)
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

export default Home