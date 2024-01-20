const {
  userInsertController,
  singleUserFindController,
  updateUserController,
} = require("../../api/users/user");
const verifyToken = require("../../middlewares/verifyToken");

const router = require("express").Router();

router.put("/users", userInsertController);

router.get("/users/:email", verifyToken, singleUserFindController);

router.put("/users/:email", verifyToken, updateUserController);

module.exports = router;