import React from 'react'
import './Bookshelf.css'
import PropTypes from 'prop-types'

//Components
import Book from '../Book'

const Bookshelf = (props) => {

  const {title, moveBookshelf, styleBookShelf} = props
  const books = props.books.map(book => 
    <Book 
      book={book}
      key={book.id} 
      moveBookshelf={moveBookshelf} />
  )
  return (
    <div className={styleBookShelf}>
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books}
        </ol>
      </div>
    </div>
  )
}

Bookshelf.propTypes = {
  moveBookshelf: PropTypes.func,
  title: PropTypes.string,
  books: PropTypes.arrayOf(PropTypes.object)
}

export default Bookshelf