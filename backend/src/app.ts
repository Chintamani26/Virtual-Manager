import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';
import healthCheckRoutes from './routes/healthCheckRoutes';
dotenv.config();

const app: Application = express();
const port = process.env.PORT || 3000;

app.use('/api', healthCheckRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
