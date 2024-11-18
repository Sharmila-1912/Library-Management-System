import React from 'react';
import './ebook.css';
import book12 from '../assets/a1.jpg';
import book7 from '../assets/book7.jpg';
import book1p from '../assets/a3.pdf';
import book7p from '../assets/a10.pdf';
import book1 from '../assets/book1.jpg';
import book2p from '../assets/a2.jpg';
import book2 from '../assets/book2.jpg';
import book3p from '../assets/a3.jpg';
import book3 from '../assets/book3.jpg';
import book4p from '../assets/a4.jpg';
import book4 from '../assets/b1.jpg';
import book5p from '../assets/a6.jpg';
import book5 from '../assets/b1.jpg';
import book6p from '../assets/wingsoffire.pdf';
import book6 from '../assets/b2.jpg';
import book8p from '../assets/a7.pdf';
import book8 from '../assets/b3.jpg';
import book81p from '../assets/wingsoffire.pdf';
import book9 from '../assets/b4.jpg';
import book9p from '../assets/a8.pdf';
import book10 from '../assets/b5.jpg';
import book10p from '../assets/a9.pdf';
import book11 from '../assets/b6.jpg';
import book11p from '../assets/b1.pdf';

const books = [
  { img: book12, pdf: book1p, title: 'Book 1' },
  { img: book7, pdf: book7p, title: 'Book 2' },
  { img: book1, pdf: book2p, title: 'Book 3' },
  { img: book2, pdf: book3p, title: 'Book 4' },
  { img: book3, pdf: book4p, title: 'Book 5' },
  { img: book4, pdf: book5p, title: 'Book 6' },
  { img: book5, pdf: book6p, title: 'Book 7' },
  { img: book6, pdf: book8p, title: 'Book 8' },
  { img: book8, pdf: book81p, title: 'Book 9' },
  { img: book10, pdf: book10p, title: 'Book 10' },
  { img: book9, pdf: book9p, title: 'Book 11' },
  { img: book11, pdf: book11p, title: 'Book 12' },
];

const EBook = () => {
  return (
    <div className='types1'>
      <div className='content2'>
        {books.map((book, index) => (
          <div className='booksk1' key={index}>
            <div className='novels1'>
              {/* Book Image */}
              <a href={book.pdf} target="_blank" rel="noopener noreferrer">
                <img 
                  src={book.img} 
                  alt={book.title} 
                  style={{ width: '300px', height:'450px' }} 
                />
              </a>
              {/* Book Download Button */}
              <div className="book-details">
                <h3>{book.title}</h3>
                <a href={book.pdf} download={book.title}>
                  <button className='download-btn'>Download Book</button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EBook;
