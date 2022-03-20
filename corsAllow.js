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

// export default corsAllow;
