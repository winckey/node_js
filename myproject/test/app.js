const express = require('express')
const app = express()
const port = 4000

app.use(express.json());

app.get('/user', (req, res) => {
  const { name, age } = req.body;
  
  // 다양한 로직 수행
  const result = {
    name,
    age,
    message: `${name}님의 나이는 ${age}살입니다.`
  };
  
  res.json(result);
});


module.exports = app