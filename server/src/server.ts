import express from 'express';
import videoRoutes from './routes/videos/videos'; 
import searchRoutes from './routes/search/search'; 
import cors from "cors";

const app = express();
const port = 3000;

app.use(cors());

app.get('/', (req, res) => {
  res.send('Bem-vindo ao server!');
});

app.use('/api', videoRoutes); 
app.use('/api', searchRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}/`);
});