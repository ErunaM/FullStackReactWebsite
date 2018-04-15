const express = require('express'); // import
const app = express(); // creates express app

app.get('/', (req, res) => {
	res.send({ hi: 'there' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
