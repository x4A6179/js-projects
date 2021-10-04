import React from 'react';

const Quote = () => {
  return(
    <div id='quote-box'>
      <p id='text'></p>
      <p id='author'></p>
      <button id='new-quote'></button>
      <a id='tweet-quote' href='twitter.com/intent/tweet'>Tweet Quote</a>
    </div>
  )
}

export default Quote;
