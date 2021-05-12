import axios from 'axios';

const todoDelegate = {

  /**
   * @returns {Object} List of ToDo items
   */
  getList: () => {
    return axios.get('http://localhost:8080/todos', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });
  },

  /**
   * Creation of new ToDo item
   * @param {Object} todo Title and default state
   * @param {function} callback Response handler
   * @param {function} errback Error handler
   */
  submit: (todo, callback, errback) => {
    axios.post('http://localhost:8080/todos/create', todo)
    .then((res) => {
      callback && callback(res);
    }).catch((error) => {
      errback && errback(error);
    });
  },

  /**
 * Deletion of Todo Item
 * @param {String} id The id of the item to delete
 * @param {function} callback Response handler
 * @param {function} errback Error handler
 */
  remove: (id, callback, errback) => {
    axios.delete('http://localhost:8080/todos/' + id)
    .then((res) => {
      callback && callback(res);
    }).catch((error) => {
      errback && errback(error);
    });
  }
};

export default todoDelegate;