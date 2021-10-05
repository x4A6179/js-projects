import React, { useState } from 'react';
import styled from 'styled-components'

const Quote = () => {

  const [quote, setQuote] = useState(quotes[0]);

function randomQuote() {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  }

  return(
    <div id='quote-box'>
      <p id='text'>{quote.quote}</p>
      <p id='author'>{quote.author}</p>
      <button id='new-quote' onClick={() => randomQuote()}>New Quote</button>
      <a id='tweet-quote' href='twitter.com/intent/tweet'>Tweet Quote</a>
    </div>
  )
}

const quotes = [
  {author: "Test", quote: "This is a test"},
  {author: "Test2", quote: "This is another test"},
  {author: "test3", quote: "Test 3 coming in"},
  {author: "Test4", quote: "Here lies test 4"}
];


export default Quote;
