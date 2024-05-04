const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Node.js service!');
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Node.js service listening on port ${port}`));
