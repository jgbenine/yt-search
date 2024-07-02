import express from 'express';
import videoRoutes from './routes/videos/videos'; 
import cors from "cors";

const app = express();
const port = 3000;

app.use(cors());

app.get('/', (req, res) => {
  res.send('Olá, mundo!');
});

app.use('/api', videoRoutes); 

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}/`);
});