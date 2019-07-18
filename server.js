import bodyParser from 'body-parser';
import express from 'express';
import mongoose from 'mongoose';
import routes from './src/routes/index';

const app = express();

mongoose.connect('mongodb://admin:admin@db:27017/admin', {
  useNewUrlParser: true,
  useCreateIndex: true,
});
mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/pdvs', routes);

app.listen(process.env.PORT || 5000);

export default app;

