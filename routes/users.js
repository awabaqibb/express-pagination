const express = require("express");
const router = express.Router();

const { users } = require("../data");
const getUsers = require("../controllers/getUsers");
const pagination = require("../middleware/pagination");

router.get("/query", pagination(users), getUsers);
module.exports = router;
