import React from 'react'
import StateContextP from './context/StateContextP'
import BookFinder from './components/BookFinder'

const App = () => {
  return (
    <div>
      <StateContextP>
        <BookFinder />
      </StateContextP>
    </div>
  )
}

export default App


// User can enter a search query into an input field
// User can submit the query. This will call an API that will return an array of books with the corresponding data (Title, Author, Published Date, Picture, etc)
// User can see the list of books appearing on the page