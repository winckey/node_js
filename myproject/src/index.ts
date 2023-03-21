import app from './app';
import { sequelize } from './sequelize';

const PORT = 3000;

sequelize
  .sync({ force: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  })
  .catch((err : Error) => console.error(err));
