import React from 'react'
import Book from './Book'

function RenderingLists() {
    const booklist = [
        'to kill a mockingbird',
        'the great gatsby',
        'the catcher in the rye'
    ]

    const books = [
        {
            title: 'to kill a mockinbird',
            author: 'harper lee',
            pages: 281
        },
        {
            title: 'the great gatsby',
            author: 'f.scott fitzgerald',
            pages: 218
        },
        {
            title: 'the catcher in the rye',
            author: 'j. d. salinger',
            pages: 234
        }
    ]

    return (
        // The key always goes on the outermost element that will be repeated
        <div>
            {booklist.map(book => {
                return <h2 key={book}>{book}</h2>
            })}
            <hr />
            {
                books.map(book => {
                    return (
                        <div key={book.title}>
                            <h5>{book.title}</h5>
                            <p>{book.author}</p>
                            <p>{book.pages}</p>
                        </div>
                    )
                })
            }
            
            <hr />
            {/* Same as above but has been moved to a separate component */}
            {/* You can use index as the key but only if the list meets all three Conditions 
            1. it must not already have any sort of unique ID or value in it. If it does, use that as the key instead
            2. The list of elements you're rendering must be static. If anything will ever be added to or removed, using the index as a key will leave React incapable of accurately keeping track of which element is which
            3. The list must never be sorted or filtered. If there is any intention to ever sort or filter the list, using the index as a key will throw off the sorting and filtering. */}
            
            {
                books.map((book, index) => {
                    return (
                        <Book key={index} book={book} />
                    )
                })
            }
        </div>
    )
}

export default RenderingLists