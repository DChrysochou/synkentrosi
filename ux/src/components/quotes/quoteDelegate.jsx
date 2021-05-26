import axios from 'axios';

const quoteDelegate = {

  /**
   * @returns {Object} List of ToDo items
   */
  getQuote: () => {
    return axios.get('http://localhost:8080/quotes', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });
  }
}

export default quoteDelegate;