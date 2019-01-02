import React from 'react';
import './BookSelect.css'

//Model
import Shelfs from '../../model/Shelfs'

const BookSelect = (props) => {

  const {book, moveBookshelf} = props
  const options = Shelfs.map(shelf =>
    <option 
      key={shelf.title+shelf.apiValue}
      value={`${shelf.apiValue}`} >
        {shelf.title}
    </option>
  )

  return (
    <div className="book-shelf-changer">
      <select
        value={book.shelf ? book.shelf : 'none'}
        onChange={(event) => moveBookshelf(event.target.value, book)}>
        <option value="move" disabled>Move to...</option>
        {options}
      </select>
    </div>
  )
}

export default BookSelect