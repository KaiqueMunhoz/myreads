import React from 'react'
import './Home.css'
import PropTypes from 'prop-types'

//Components
import ButtonSearch from '../../components/ButtonSearch';
import ListBooksTitle from '../../components/ListBooksTitle';
import Bookshelf from '../../components/Bookshelf';

//Model
import Shelfs from '../../model/Shelfs'

const Home = (props) => {
  
  const changeStyle = id =>  id % 2 === 0 ? "bookshelf" : "bookshelf-grey-light"
  const {moveBookshelf} = props
  const filterBooksByShelf = (apiValue) => props.books.filter(book =>  book.shelf === apiValue )    
  const bookshelves = Shelfs.map((shelf, id) => {
    const books = filterBooksByShelf(shelf.apiValue)
    return shelf.apiValue !== 'none' &&
      <Bookshelf 
        styleBookShelf={changeStyle(id)}
        books={books}
        key={shelf.title + shelf.apiValue}
        moveBookshelf={moveBookshelf}
        title={shelf.title} /> 
  })
    
  return (
    <div className="app">
      <ListBooksTitle />
      <div className="list-books-content">
        {bookshelves}
      </div>
      <ButtonSearch /> 
    </div>
  )
}

Home.propTypes = {
  moveBookshelf: PropTypes.func,
  books: PropTypes.arrayOf(PropTypes.object)
}

export default Home