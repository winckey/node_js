import express, { Application } from 'express';
import { sequelize } from './sequelize';
import userRouter from './routes/user.routes';


const app: Application = express();

// 미들웨어 등록
app.use(express.json());
app.use('/users', userRouter);



sequelize.sync({ force: true })
  .then(() => {
    console.log('Synced models to the database!');
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  })
  .catch((error) => {
    console.error('Unable to sync models to the database:', error);
})


