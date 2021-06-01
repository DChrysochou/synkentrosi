import React from 'react';

import delegate from './quoteDelegate';

import '../../style/css/quotes.css';

class Quotes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeIn: false
    };
  }

  componentDidMount = async () => {
    let quoteData = await delegate.getQuote();
    let quote = quoteData.data;
    let author = quote.author || "Unknown";
    this.setState({
      author: "~ " + author,
      text: quote.text,
      fadeIn: true
    })
  }

  render() {
    return (
      <div id="quote-container" className={this.state.fadeIn ? '' : 'faded'}>
        <div id="quote-text">{this.state.text}</div>
        <div id="quote-author">{this.state.author}</div>
      </div>
    );
  }
}

export default Quotes;