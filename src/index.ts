import express from 'express';
import { router } from './routes/loginRoutes';
import { AppRouter } from './AppRouter';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import './controllers/loginController';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['lsf'] }));
app.use(AppRouter.getInstance());
app.use(router);

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
