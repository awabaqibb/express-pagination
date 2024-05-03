const pagination = (data) => {
  return (req, res, next) => {
    console.log(req.query);
    const { page, limit } = req.query;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const current = {};
    current.next = {
      page: +page + 1,
    };

    if (startIndex > 0) {
      current.prev = {
        page: +page - 1,
      };
    }

    current.limit = +limit;
    current.current = data.slice(startIndex, endIndex);

    res.current = current;
    next();
  };
};

module.exports = pagination;
