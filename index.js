const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send({ Trump: 'Did 911' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
