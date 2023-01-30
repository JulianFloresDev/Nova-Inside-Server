import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './routes/index.js';

// Allow to listen environment variables from .env file.
dotenv.config();

const app = express();
// Allow-Cross-Origin-Resource.
app.use(cors());
// Allow json format on requests.
app.use(express.json());
// Use diferents routes from express.Router in routes/index.js file.
app.use(router);

const port = process.env.PORT || 4001;

app.listen(port, () => console.log(`Server listening on port: ${port}\n`, `localhost:${port}`));

export default app;
