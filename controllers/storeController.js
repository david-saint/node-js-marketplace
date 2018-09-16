exports.homePage = (req, res) => {
  const data = {
    title: '🎶🤷‍♀️✌',
    name: 'David',
  };
  res.render('hello', data);
};

exports.addStore = (req, res) => {
  res.render('editStore', { title: 'Add Store' });
};

exports.createStore = (req, res) => {
  res.json(req.body);
};
