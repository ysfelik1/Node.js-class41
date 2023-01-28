import express from 'express';
const PORT = 3000;
const app = express();

app.listen(PORT, () => {
  console.log(`listening port: ${PORT}...`);
});

app.get('/', (req, res) => {
  res.send('hello from backend to frontend!');
});

app.use(express.json());

app.post('/weather', (req, res) => {
  const { cityName } = req.body;
  if (!cityName) {
        res.status(400);
        res.send('Please do not forget to provide city name.');
        return;
      }
      else{
        res.status(400);
        res.send(cityName);
      }
});