import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

function BookShop() {
    const [ data, setData ] = useState([]);

    const fetchBooks = async () => { 
        const data = await fetch('https://www.anapioficeandfire.com/api/books');
        
        const books = await data.json();
        setData(books);
    }

    useEffect(() => {
        fetchBooks();
        
    },[])

    return (
        <div>
            <h1>This are all books you have:</h1>
            {data.map(item => 
                <h3 key={item.isbn}><Link to={`/bookshop/${item.url.split('/')[5]}`}>{item.name}</Link></h3>
            )}
        </div>
    )
}

export default BookShop;