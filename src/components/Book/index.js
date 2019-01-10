import React from 'react'
import './Book.css'
import PropTypes from 'prop-types'

//Components
import BookSelect from '../BookSelect'

const Book = (props) => {
  const cardStyle = {width: '12rem', height: '25rem'}
  const {book, moveBookshelf} = props
  const image = book.imageLinks
  const showAuthors = () => {
    if(!book.authors) {
      return ''
    }
    return book.authors.map(author => <div key={author + book.id} className="card-text">{author}</div> )
  }
  
  return (
    <li>
      <div className="card" style={cardStyle} >
      <img className="card-img-top" src={!image ? '': image.thumbnail} alt='Book Cover' />
        <div className="card-body">
        <h5 className="card-title">{book.title}</h5>
          <BookSelect book={book} moveBookshelf={moveBookshelf}/>
          {showAuthors()}
        </div>
        
        
      </div>
    </li>
  )
}

Book.propTypes = {
  moveBookshelf : PropTypes.func,
  book: PropTypes.object
}

export default Book