import React from 'react'

//Components
import ButtonSearch from '../ButtonSearch';
import ListBooksTitle from '../ListBooksTitle';
import Bookshelf from '../Bookshelf';

const ListBooks = () => {
  return (
    <div className="list-books">
      <ListBooksTitle />
      <div className="list-books-content">
        <Bookshelf title="Current reading" />
        <Bookshelf title="Want to read" />
        <Bookshelf title="Read" />
      </div>
      <ButtonSearch />
    </div>
  )
}

export default ListBooks