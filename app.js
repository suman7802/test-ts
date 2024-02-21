const express = require('express');
const path = require('path');

const port = 8000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
);

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/test', (req, res) => {
  res.send('This is a test route.');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
