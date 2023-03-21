import express, { Application } from 'express';
import { sequelize } from './sequelize';
import userRouter from './routes/user.routes';


const app: Application = express();

// 미들웨어 등록

app.use('/users', userRouter);


sequelize.sync({ force: true }).then(() => {
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
});
