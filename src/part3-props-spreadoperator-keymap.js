import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const books = [
  {
    id: 1,
    img :"https://m.media-amazon.com/images/I/81PyY78yuNL._AC_UL320_.jpg",
    title :"Amazon Unbound: Jeff Bezos and the Invention of a Global Empire",
    author: "by Brad Stone, Pete Larkin, et al."
  },
  {
    id: 2,
    img : "https://m.media-amazon.com/images/I/71VTIUNTI0L._AC_UL320_.jpg",
    title : "The Maid: A Novel",
    author: "by Nita Prose"
  },
  {
    id: 3,
    img : "https://m.media-amazon.com/images/I/81wPRktVjGL._AC_UL320_.jpg",
    title : "The Wish",
    author: "by Nicholas Sparks, Mela Lee, et al."
  }
  
];
const star = <p style={{color:'orange'}}>&#9733; &#9733; &#9733; &#9733; &#9734;</p>

//Method one for create map list
// function BookList(){
//   return(
//     <section>
//       <h1>Book List</h1>
//       <div className='booklist'>
//        {books.map((book) => {
//          const {img, title,author} = book;
//          return (
//            // Using unique property for key is preferred for dynamically properties
//           <Book key={book.id} book={book}/>  
//          );
//        })}

//       </div>
//     </section>
//   );
// }

//  Spread Operator
function BookList(){
  return(
    <section>
      <h1>Book List</h1>
      <div className='booklist'>
       {books.map((book) => {
         const {img, title,author} = book;
         return (
           // Using unique property for key is preferred for dynamically properties
          <Book key={book.id} {...book}/>  
         );
       })}

      </div>
    </section>
  );
}

const Book = (props) => { // also work with {image,title,author}
  const {img,title,author} = props; //If you using spread operator doesn't need props.book
  console.log(props)
  return(
  <article className='book'>
    <img src={img} alt={title} />
    <h1>{title}</h1>
    <h4>{author}</h4>
    {star}
   
  </article>
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
