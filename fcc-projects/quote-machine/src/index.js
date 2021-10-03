import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



class Quote extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (

    );
  }
}

class QuoteMachine extends React.Component {
  constructor(props){
    super(props);
    this.newQuote = this.newQuote.bind(this);
  }

  newQuote() {
    this.setState({
      text: '',
      author: '',
    });
  }

  render() {
    const boxStyle = {
      margin: "0 auto"
    }

    const quotes = {
      'A':'Hello',
      'B':'Bye'
    }

    const idx = Math.floor(Math.random() * quotes.length);

    return (
      <div id='quote-box' style={boxStyle}>
        <p id='text'></p>
        <p id='author'></p>
        <button id='new-quote' onClick={this.newQuote)}></button>
        <a id='tweet-quote' href='https://twitter.com/intent/tweet/' />
      </div>
    );
  }
}



ReactDOM.render(<QuoteMachine /> ,document.getElementById('root'));
