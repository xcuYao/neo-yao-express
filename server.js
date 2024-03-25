const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Cloudflare Pages!');
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});