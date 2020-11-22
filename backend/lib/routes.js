import { Router } from 'express';
const messageApp = require('./controller.js');
const router = Router();

router.get('/', async (req, res) => {
  await messageApp
    .getAll()
    .then((messages) => res.json(messages))
    .catch((err) => res.status(404).json(err));
});

router.post('/message', async (req, res) => {
  await messageApp
    .post(req.body.content)
    .then((messages) => {
      res.json(messages);
    })
    .catch((err) => res.status(404).json(err));
});

router.delete('/delete/:id', async (req, res) => {
  let id = Number(req.params.id); // required so I compare a number (message.id) to a number (id) and not a string in delete(id)
  await messageApp
    .deleteMessage(id)
    .then((messages) => {
      res.json(messages);
    })
    .catch((err) => res.status(404).json(err));
});

router.get('/message/:id', async (req, res) => {
  await messageApp
    .getSingleMessage(req.params.id)
    .then((messages) => res.json(messages))
    .catch((err) => res.status(404).json(err));
});

router.put('/update/:id', async (req, res) => {
  await messageApp
    .updateMessage(req.params.id, req.body.content)
    .then((messages) => {
      res.json(messages);
    })
    .catch((err) => res.status(404).json(err));
});

export default router;
