exports.storesMiddleware = (req, res, next) => {
  req.name = 'David Saint';
  next();
};

exports.homePage = (req, res) => {
  const data = {
    title: '🎶🤷‍♀️✌',
    name: req.name,
  };
  res.render('hello', data);
};
