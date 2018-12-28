import React from 'react'
import './Book.css'

const shelfs = [
  {
    title: "Current reading",
    apiValue: "currentlyReading"
  },
  {
    title: "Want to read",
    apiValue: "wantToRead"
  },
  {
    title: "Read",
    apiValue: "read"
  },
  {
    title: "None",
    apiValue: "none"
  }
]

const Book = (props) => {

    const {book, moveBookshelf} = props
    const image = book.imageLinks
    
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <img className="book-cover" src={!image ? '': image.thumbnail} alt='Book Cover' />
            <div className="book-shelf-changer">
              <select onChange={(event) => moveBookshelf(event, book)}>
                <option value="move" disabled>Move to...</option>
                {/* Verificar se precisa mesmo mudar o none de lugar ou existe uma outra forma
                    ps: None estava no final da lista */}
                {shelfs.map(shelf => <option key={shelf.title+shelf.apiValue} value={`${shelf.apiValue}`}>{shelf.title}</option>)}
                
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