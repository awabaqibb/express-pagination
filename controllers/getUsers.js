const getUsers = (req, res) => {
  res.status(200).json(res.current);
};

module.exports = getUsers;
