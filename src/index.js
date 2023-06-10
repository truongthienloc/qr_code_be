import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import rootRoute from './routes';

const app = express();

// Config middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));
app.use(express.static('src/public'));
app.set('views', 'src/views');

// Router
app.use(rootRoute);

// Database

// Run app
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`App is running in port ${port}`);
});
