import MessageModel from './model';

let messageApp = new MessageModel(`/\///json/\//testMessages.json`);

function getAll() {
  return new Promise((resolve, reject) => {
    var result = messageApp.getAll();
    if (result !== []) {
      resolve(result);
    } else {
      reject(result);
    }
  });
}

function post(content) {
  return new Promise((resolve, reject) => {
    let message = messageApp.post(content);
    if (message !== []) {
      resolve(message);
    } else {
      reject(message);
    }
  });
}

module.exports = {
  getAll,
  post,
};
