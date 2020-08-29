import React, { createContext, useState } from 'react'
import axios from 'axios'

export const StateContext = createContext()

const StateContextP = (props) => {

    const [books, setBooks] = useState([])
    const [input, setInput] = useState('')

    const getBooks = (bookName) => {
        debugger
        axios
            .get(`https://www.googleapis.com/books/v1/volumes?q=${bookName}`)
            .then(res => setBooks(res.data.items))
            .catch(err => console.log(err))
    }


    return (
        <StateContext.Provider value={{ books, setBooks, input, setInput, getBooks }}>
            {props.children}
        </StateContext.Provider>
    )
}

export default StateContextP
