import path from 'path';
import express, {Request, Response} from 'express';

const app = express();

app.use(express.static(path.join(__dirname, '..', 'client', 'dist')));
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '..', 'client', 'dist', 'index.html'))
);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!');
});

app.get('/test', (req: Request, res: Response) => {
  res.send('This is a test route.');
});

app.listen();
