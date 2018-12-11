import React from 'react'

//Components
import ButtonSearch from '../ButtonSearch';
import ListBooksTitle from '../ListBooksTitle';
import Bookshelf from '../Bookshelf';

const titles = ["Current reading", "Want to read", "Read"]

const ListBooks = () => {
  return (
    <div className="list-books">
      <ListBooksTitle />
      <div className="list-books-content">
        {titles.map(name => <Bookshelf title={name}/> )}
      </div>
      <ButtonSearch />
    </div>
  )
}

export default ListBooks