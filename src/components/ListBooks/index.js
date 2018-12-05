import React from 'react'

//Components
import ButtonOpenSearch from '../ButtonOpenSearch';
import ListBooksTitle from '../ListBooksTitle';
import Bookshelf from '../Bookshelf';

const ListBooks = () => {
  return (
    <div className="list-books">
      <ListBooksTitle />
      <div className="list-books-content">
        <div>
          <Bookshelf />
          <Bookshelf />
          <Bookshelf />
        </div>
        </div>
      <ButtonOpenSearch />
    </div>
  )
}

export default ListBooks