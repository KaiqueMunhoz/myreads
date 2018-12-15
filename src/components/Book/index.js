import React from 'react'

const shelfs = [
  {
    title: "none",
    apiValue: "None"
  },
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
  }
]

const Book = (props) => {

    const {book, moveBookshelf} = props

    return (
      <li>
        <div className="book">
          <div className="book-top">
            {/* Retirar esse estilo inline */}
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url('${book.imageLinks.thumbnail}')` }}></div>
            <div className="book-shelf-changer">
              <select onChange={(event) => moveBookshelf(event, book)}>
                <option value="move" disabled>Move to...</option>
                {/* Verificar se precisa mesmo mudar o none de lugar ou existe uma outra forma
                    ps: None estava no final da lista */}
                {shelfs.map(shelf => <option value={`${shelf.apiValue}`}>{shelf.title}</option>)}
                
              </select>
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          {book.authors.map(author => <div key={author + book.id} className="book-authors">{author}</div> )}
        </div>
      </li>
    )
  }


export default Book