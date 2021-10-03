import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class QuoteMachine extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      quotes: quotes,
      currQuote: quotes[0].quote,
      currAuth: quotes[0].author,
    }
    this.newQuote = this.newQuote.bind(this);
    this.randomInt = this.randomInt.bind(this);
  }


  randomInt(){
    const idx = Math.floor(Math.random() * this.state.quotes.length)
    return idx;
  }

  newQuote() {
    const index = this.randomInt;
    this.setState({
      text: this.state.quotes[index].quote,
      author: this.state.quotes[index].author,
    });
  }

  render() {
    return (
      <div id='quote-box' style={boxStyle}>
        <p id='text'>{this.state.currQuote}</p>
        <p id='author'>{this.state.currAuth}</p>
        <button id='new-quote' onClick={this.newQuote}></button>
        <a id='tweet-quote' href='https://twitter.com/intent/tweet/' />
      </div>
    );
  }
}

const quotes = [
  {
    quote: "testing1",
    author: "Auth1"
  },
  {
    quote: "testing2",
    author: "Auth2"
  },
  {
    quote: "testing3",
    author: "Auth3"
  }
];


ReactDOM.render(<QuoteMachine /> ,document.getElementById('root'));
