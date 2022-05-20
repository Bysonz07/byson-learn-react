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

const Book = (props) => { 
  const {img,title,author} = props;
  console.log(props)
  const clickHandler = () => {
    alert('Hello World')
  }
  const complexExample = (author) => {
    console.log(author)
  }
  return(
  <article className='book' onMouseOver={() => {
    console.log(title)
  }}>
    <img src={img} alt={title} />
    <h1 onClick={() => console.log(title)}>{title}</h1>
    <h4>{author}</h4>
    {star}
   <button type='button' onClick={clickHandler}> reference example</button>
   {/* Use () => to prevent all compile */}
   <button type='button' onClick={() => complexExample(author)}> get author name</button> 
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
