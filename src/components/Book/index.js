import React from 'react'
import './Book.css'

//Components
import BookSelect from '../BookSelect'

const Book = (props) => {

    const {book, moveBookshelf} = props
    const image = book.imageLinks
    
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <img className="book-cover" src={!image ? '': image.thumbnail} alt='Book Cover' />
            <BookSelect book={book} moveBookshelf={moveBookshelf}/>
          </div>
           <div className="book-title">{book.title}</div>
           {/* Arrumar o if aqui depois */}
          {book.authors ? 
            book.authors.map(author => <div key={author + book.id} className="book-authors">{author}</div> ): ''}
        </div>
      </li>
    )
  }


export default Book