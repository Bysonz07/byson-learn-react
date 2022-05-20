import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {books} from './Book/books';
import Book from './Book/Book';



//  Spread Operator
function BookList(){
  return(
    <section>
      <h1>Book List</h1>
      <div className='booklist'>
       {books.map((book) => {
         const {img, title,author} = book;
         return (
          <Book key={book.id} {...book}/>  
         );
       })}

      </div>
    </section>
  );
}




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BookList />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();