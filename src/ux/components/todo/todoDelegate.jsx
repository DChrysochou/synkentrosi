import axios from 'axios';

const todoDelegate = {
  getList: () => {
    axios.get('http://localhost:8080/todos', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });
  },

  // TODO: Pass in actual todo data here instead of just spoofing it.
  submit: () => {
    let todoObj = {
      id: (Math.floor(Math.random() * 100)).toString(),
      title: 'xyzzy',
      completed: false
    }

    axios.post('http://localhost:8080/todos/create', todoObj)
    .then((res) => {
        console.log(res.data)
    }).catch((error) => {
        console.log(error)
    });
  }
};