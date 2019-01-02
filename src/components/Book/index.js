import React from 'react'
import './Book.css'

//Components
import BookSelect from '../BookSelect'

const Book = (props) => {

    const {book, moveBookshelf} = props
    const image = book.imageLinks
    const showAuthors = () => {
      if(!book.authors) {
        return ''
      }
      return book.authors.map((author, id) => <div key={author + book.id} className="book-authors">{id + " " + author}</div> )
    }
    
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <img className="book-cover" src={!image ? '': image.thumbnail} alt='Book Cover' />
            <BookSelect book={book} moveBookshelf={moveBookshelf}/>
          </div>
          <div className="book-title">{book.title}</div>
          {showAuthors}
        </div>
      </li>
    )
  }


export default Book