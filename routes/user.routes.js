const express = require("express")
const db = require('./db')
const user= require("./models/user")
const router = express.Router()

// Get all posts
router.get("/user", async (req, res) => {
	const usuario = await db.user.find()
	res.send(usuario)
})

module.exports = router