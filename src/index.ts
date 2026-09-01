import express from 'express';

const app = express();
const port = 8000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'University management API is running.' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  console.log(`URL: http://localhost:${port}/`);
});
