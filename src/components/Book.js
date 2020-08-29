import React from 'react'

const Book = ({ title, img, author, publisher, date, description }) => {

    return (
        <div className='book-content'>
            {title && <h4>{title}</h4>}
            {img && <img src={img} alt='book' />}
            {author && <p><span>Author: </span>{author}</p>}
            {publisher && <p ><span>Publisher:</span> {publisher}</p>}
            {date && <p > <span>Publish Date: </span>{date}</p>}
            {description && <p><span>Description: </span>{description}</p>}
        </div>
    )
}

export default Book
