const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const routes = require('./routes/router');

app.get('/', routes);
app.get('/:param', routes);

app.listen(PORT, () => {
    console.log(`Server is running!`);
});
