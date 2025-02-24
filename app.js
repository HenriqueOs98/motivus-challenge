const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World! This is our example CI/CD application.');
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy' });
});
//comentario  
if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
}

module.exports = app; 