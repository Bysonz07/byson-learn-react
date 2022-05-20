import React from 'react'
const star = <p style={{color:'orange'}}>&#9733; &#9733; &#9733; &#9733; &#9734;</p>
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
   <p></p>
   <button type='button' onClick={() => complexExample(author)}> get author name</button> 
  </article>
  );
}

export default Book