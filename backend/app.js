import express from 'express';
import routes from './lib/routes.js';
import cors from 'cors';
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(routes);

app.listen(3001, function () {
  console.log('Connected');
});

export default app;
