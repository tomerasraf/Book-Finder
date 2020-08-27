import React from 'react'
import FindBook from './components/BookFinder/BookFinder'
import Book from './components/Book.js/Book'

const App = () => {
  return (
    <div>
      <FindBook />
      <Book />
    </div>
  )
}

export default App


// User can enter a search query into an input field
// User can submit the query. This will call an API that will return an array of books with the corresponding data (Title, Author, Published Date, Picture, etc)
// User can see the list of books appearing on the page