const express = require("express");
const router = express.Router();
const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.home);
/*router.get("/register", ctrl.output.register);
router.get("/login", ctrl.output.login);
router.post("/login", ctrl.deliver.login);
router.post("/register", ctrl.deliver.register);*/


module.exports = router;

