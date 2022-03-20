const express = require('express');

const corsAllow = (req, res, next) => {
  res.set('Content-Type', 'application/json');
  res.append('Access-Control-Allow-Origin', 'http://localhost:3000'); //  授权模式不能 * 号，必须列出来
  res.append('Access-Control-Allow-Credentials', 'true');
  res.append('Access-Control-Allow-Methods', '*');
  res.append(
    'Access-Control-Allow-Headers',
    'Content-Type,Access-Token,Origin, X-Requested-With, Accept, Authorization'
  );
  res.append('Access-Control-Expose-Headers', '*');
  next();
};

const server = express();
server.use(express.json());
server.use(corsAllow); // 而我自己的中间件不需要（）？我想是因为别人是hook函数，运行后返回一个函数给你用

//🍎 静态网页目录，以及认证之前的注册、登录api
server.get('/', (req, res) => res.json('coming from  Nodejs-no-database')); // 暂时重定向到静态主页，以后应该是定向到是否登录的选择页面

//🍎 start the Server
const PORT = 3500;
server.listen(PORT, err => {
  if (err) {
    console.log('There is an error happened in the server!', err);
    return;
  }
  console.log(`Server is listening on http://localhost:${PORT} ......`);
});
