import express from 'express';
const PORT = 3000;
const app = express();

app.listen(PORT, () => {
  console.log(PORT);
});

app.get('/', (req, res) => {
  res.send('hello from backend to frontend!');
});

