import React from 'react'
import bookImg from '../../img/richDad_test.jpg'

const Book = () => {
    return (
        <div>
            <h4>Rich Dad, Poor Dad</h4>
            <img src={bookImg} />
            <p id='author'>Author: Robert T. Kiyosaki:</p>
            <p id='publisher'>Publisher: Scribl</p>
            <p id='date'>Published: 2019-05-25</p>
            <p id='description'>What The Rich Teach Their Kids About Money</p>
        </div>
    )
}

export default Book
