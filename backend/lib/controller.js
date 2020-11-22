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

function deleteMessage(id) {
  return new Promise((resolve, reject) => {
    let result = messageApp.delete(id);
    if (result !== 'Message not found in database') {
      resolve(result);
    } else {
      reject(result);
    }
  });
}

module.exports = {
  getAll,
  post,
  deleteMessage,
};