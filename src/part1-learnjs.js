// const Greeting = () => {
//   return React.createElement('h1',{}, 'hello world');
// }
// const SomeThings = () => <h3>is developer</h3>;
// const person = <h2>Byson</h2>
// function Greeting(){
//   return (
//     <div>
//       <h1>Hello World</h1>
//       {person}
//       <SomeThings />
//     </div>
//   )
// }

function BookList(){
  return(
    <section className='booklist'>
      <Book />
       <Book />
        <Book />
         <Book />

    </section>
  );
}
const Book = () => {
  return(
  <article className='book'>
    <Img />
    <Title />
    <Author />
    {Star}
  </article>
  );
}
const Img = () => <img src="https://m.media-amazon.com/images/I/81PyY78yuNL._AC_UL320_.jpg" />
const Title = () => <h2>Amazon Unbound: Jeff Bezos and the Invention of a Global Empire</h2>
const Author = () => <h4 style={{color: '#617d98', fontSize: '0.75rem'}}>by Brad Stone, Pete Larkin, et al.</h4>
const Star = <h4 style={{color: 'orange', fontSize: '0.75rem'}}>&#9733; &#9733; &#9733; &#9733; &#9734;  </h4>;
