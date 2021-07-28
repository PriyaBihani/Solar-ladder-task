const express = require('express');
const connectDb = require('./services/mongodb/connectDB');
const app = express();

var cors = require('cors');
// Connect to DB
connectDb();

// Middlewares
app.use(express.json({ extended: false })); //body parsing middleware
app.use(cors()); // CORS middle to avoid any cross origin errors

// Routes
app.use('/api', require('./routes/inventory'));

// Serve static assets in production

if (process.env.NODE_ENV === 'production') {
	// Set static folder
	app.use(express.static('client/build'));

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server started on port ${PORT} `));
