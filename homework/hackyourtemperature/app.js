
import express from 'express';
import {keys} from "./sources/keys.js";
import fetch from 'node-fetch';


const app = express();



app.get('/', (req, res) => {
  res.send('hello from backend to frontend!');
});

app.use(express.json());

app.post('/weather',async (req, res) => {
  const cityName = req.body.cityName;

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${keys.API_KEY}&units=metric`,
    );
    const data = await response.json();
    if(data.cod==200) {
      const temperature = data.main.temp+'°C';
      res.status(200).send({weatherText: `${cityName}: ${temperature}`});
    }  else{
      res.status(404).json({ weatherText: 'CityName is not found!' });
    }
  
  } catch (error) {
     res.status(400).send(error);
  }
});

export default app;