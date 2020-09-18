
import React, { useState, useEffect } from 'react';


function Book( {match} ) {
    
    useEffect(() => {
        fetchItem();
    }, []);

    const [item, setItem] = useState({});

    const fetchItem = async () => {
            const fetchBook = await fetch(
                `https://www.anapioficeandfire.com/api/books/${match.params.id}`
            );

            const book = await fetchBook.json();
            
            setItem(book);
    };

    return (
        <div>
            <h1>Book</h1>
            <h3>Book Name: {item.name}</h3>
            <h3>Book Author: {item.authors}</h3>
            <h3>Country: {item.country}</h3>
        </div>
    )
}

export default Book;