const { Router } = require("express");

const router = Router()

const UserController = require("./controllers/UserController");
const UserController2 = require("./controllers/UserController2");
const AllUserController = require("./controllers/AllUserController");

router.post("/", AllUserController.handle);
router.get("/", AllUserController.handle);

router.post("/user", UserController.handle);
router.get("/user", UserController.handle);

router.post("/user/1", UserController2.handle);
router.get("/user/1", UserController2.handle);

module.exports = router;