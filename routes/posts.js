const express = require("express");
const router = express.Router();

const { posts } = require("../data");
const getPosts = require("../controllers/getPosts");
const pagination = require("../middleware/pagination");

router.get("/query", pagination(posts), getPosts);
module.exports = router;
