import React from 'react'
import '../../style/style.css'
import searchIcon from '../../img/search.png'

const BookFinder = () => {
    return (
        <div className='bookfinder'>

            <div className='title'>
                <h1>Book Finder</h1>
            </div>

            <form className='search'>
                <input type='text' />
                <button type='submit'><img src={searchIcon} alt='search logo' /></button>
            </form>
        </div>
    )
}

export default BookFinder;
