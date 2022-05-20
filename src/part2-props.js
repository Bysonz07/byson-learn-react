import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const firstBook = {
  img :"https://m.media-amazon.com/images/I/81PyY78yuNL._AC_UL320_.jpg",
  title :"Amazon Unbound: Jeff Bezos and the Invention of a Global Empire",
  author: "by Brad Stone, Pete Larkin, et al."
};

const secondBook = {
  img : "https://m.media-amazon.com/images/I/71VTIUNTI0L._AC_UL320_.jpg",
  title : "The Maid: A Novel",
  author: "by Nita Prose"
};

const star = <p style={{color:'orange'}}>&#9733; &#9733; &#9733; &#9733; &#9734;</p>

function BookList(){
  return(
    <section>
      <h1>Book List</h1>
      <div className='booklist'>
        <Book 
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
        >
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde inventore blanditiis accusamus cum ad, quas deserunt? Autem et illum consectetur?.</p>
        </Book>
        <Book 
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
        />
      </div>
    </section>
  );
}
// method props one
// const Book = (props) => {
//   console.log(props)
//   return(
//   <article className='book'>
//     <img src={props.img} alt="jeff-bezos-book" />
//     <h1>{props.title}</h1>
//     <h4>{props.author}</h4>
//     {star}
   
//   </article>
//   );
// }

// // method props two
// const Book = (props) => {
//   console.log(props);
//   const {img, title, author} = props;
//   return(
//   <article className='book'>
//     <img src={img} alt="jeff-bezos-book" />
//     <h1>{title}</h1>
//     <h4>{author}</h4>
//     {star}
   
//   </article>
//   );
// }

// method props three, show children one
// const Book = ({img,title,author,children}) => { //children props to display something inside the classComponent and special builtin
//   console.log(img,author,title)
//   return(
//   <article className='book'>
//     <img src={img} alt="jeff-bezos-book" />
//     <h1>{title}</h1>
//     <h4>{author}</h4>
//     {star}
//     {children}
   
//   </article>
//   );
// }

// // method show children two
// const Book = (props) => {
//   console.log(props)
//   return(
//   <article className='book'>
//     <img src={props.img} alt="jeff-bezos-book" />
//     <h1>{props.title}</h1>
//     <h4>{props.author}</h4>
//     {star}
//     {props.children}
   
//   </article>
//   );
// }

// method props three, show children one
const Book = (props) => { //children props to display something inside the classComponent and special builtin
  const {img,title,author,children} = props;
  console.log(img,author,title)
  return(
  <article className='book'>
    <img src={img} alt="jeff-bezos-book" />
    <h1>{title}</h1>
    <h4>{author}</h4>
    {star}
    {children}
   
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
