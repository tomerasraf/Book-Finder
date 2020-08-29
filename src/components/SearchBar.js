import React, { useContext } from 'react'
import { StateContext } from '../context/StateContextP'


const SearchBar = () => {

    const { input, setInput, getBooks } = useContext(StateContext)

    return (
        <div className='bookfinder'>

            <div className='title'>
                <h1>Book Finder</h1>
            </div>

            <form onSubmit={e => {
                e.preventDefault()
                getBooks(input)
                setInput('')

            }} className='search'>
                <input type='text' value={input} onChange={e => {
                    setInput(e.target.value)
                }} />
                <button type='submit'><i className="fas fa-search"></i></button>
            </form>
        </div>
    )
}

export default SearchBar
