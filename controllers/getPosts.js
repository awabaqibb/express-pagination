const getPosts = (req, res) => {
  res.status(200).json(res.current);
};

module.exports = getPosts;
