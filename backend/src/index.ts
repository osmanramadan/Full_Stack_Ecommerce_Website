import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';
import routes from './routes';

const app: express.Application = express();
const port = 3001;

const corsoptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200
};

// const options = {
// uploadDir: path.join(__dirname, 'uploads'),
// autoClean: true,

// app.use(formData.parse(options));
// app.use(formData.format());
// app.use(formData.stream());
// app.use(formData.union());

app.use(cors(corsoptions));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(routes);

app.listen(port, async (): Promise<void> => {
  const url = `http://localhost:${port}`;
  console.log(` open ${url} to review the project ...`);
});

export default app;
