import React from 'react'
import * as BooksAPI from '../../api/BooksAPI'
import './Home.css'

//Components
import ListBooks from '../../components/ListBooks';

const Home = () => {
  return (
    <div className="app">
      <ListBooks />
    </div>
  )
}

export default Home
