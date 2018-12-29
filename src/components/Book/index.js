import React from 'react'
import './Book.css'

//Model
import shelfs from '../../model/shelfs'

const Book = (props) => {

    const {book, moveBookshelf} = props
    const image = book.imageLinks
    
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <img className="book-cover" src={!image ? '': image.thumbnail} alt='Book Cover' />
            <div className="book-shelf-changer">
              <select
                value={book.shelf ? book.shelf : 'none'}
                onChange={(event) => moveBookshelf(event.target.value, book)}>
                <option value="move" disabled>Move to...</option>
                {shelfs.map(shelf =>
                  <option 
                    key={shelf.title+shelf.apiValue}
                    value={`${shelf.apiValue}`} >
                      {shelf.title}
                  </option>
                )}
              </select>
            </div>
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