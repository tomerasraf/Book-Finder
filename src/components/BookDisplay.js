import React, { useContext } from 'react'
import { StateContext } from '../context/StateContextP'
import Book from './Book'

const BookDisplay = () => {

    const { books } = useContext(StateContext)

    return (
        <div className='book-display'>
            {
                books.map((book, i) => {
                    return <Book
                        key={i}
                        title={book.volumeInfo.title}
                        img={book.volumeInfo.imageLinks.thumbnail}
                        author={book.volumeInfo.authors[0]}
                        publisher={book.volumeInfo.publisher}
                        date={book.volumeInfo.publishedDate}
                        description={book.volumeInfo.description}
                    />

                })
            }
        </div>
    )
}

export default BookDisplay
