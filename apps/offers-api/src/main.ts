import { app } from './app';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3001;

const mainApp = app;

mainApp.listen(port, () => {
  console.log('Server listening on port 3001');
});

