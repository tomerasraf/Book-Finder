import React, { useContext } from 'react'
import '../style/style.css'
import SearchBar from './SearchBar'
import BookDisplay from './BookDisplay'
import { StateContext } from '../context/StateContextP'

const BookFinder = () => {

    const { books } = useContext(StateContext)

    return (
        <div>
            <SearchBar />
            <BookDisplay />
        </div>
    )
}

export default BookFinder;
