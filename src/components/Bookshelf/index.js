import React from 'react'

//Components
import Book from '../Book'

const Bookshelf = (props) => {

  const {title, books} = props

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map(book => <Book book={book}/>)}
        </ol>
      </div>
    </div>
  )
}

export default Bookshelf