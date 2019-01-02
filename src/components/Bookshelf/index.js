import React from 'react'
import './Bookshelf.css'


//Components
import Book from '../Book'

const Bookshelf = (props) => {

  const {title, moveBookshelf} = props
  const books = props.books.map(book => 
    <Book 
      book={book}
      key={book.id} 
      moveBookshelf={moveBookshelf} />
  )
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books}
        </ol>
      </div>
    </div>
  )
}

export default Bookshelf