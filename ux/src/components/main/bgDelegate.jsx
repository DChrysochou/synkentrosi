import axios from 'axios';

const bgDelegate = {

  /**
   * @returns {Object} List of ToDo items
   */
  getBackground: () => {
    return axios.get('http://localhost:8080/background', {
      headers: {
        'Content-Type': 'image/png',
        'Accept': 'image/png'
      }
    });
  }
}

export default bgDelegate;