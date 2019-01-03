import React from 'react';
import './BookSelect.css'
import PropTypes from 'prop-types'

//Model
import Shelfs from '../../model/Shelfs'

const BookSelect = (props) => {

  const {book, moveBookshelf} = props
  const options = Shelfs.map(shelf =>
    <option 
      key={shelf.title + shelf.apiValue}
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

BookSelect.propTypes = {
  moveBookshelf: PropTypes.func,
  book: PropTypes.object
}

export default BookSelect