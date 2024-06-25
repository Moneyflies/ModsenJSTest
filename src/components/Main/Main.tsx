import React from 'react';
import Book from '../Book/Book'

const Main = () => {
    return (
        <div>
            <div class="found">Found 446 results</div>
            <div class="all_books">
                <Book />
                <Book />
                <Book />
                <Book />
            </div>
        </div>
    ) 
}

export default Main;