const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const {saveRedirectUrl} = require("../middleware.js");
const userController = require("../controllers/users.js");

// for signup get and post
router.route("/signup")
.get(userController.renderSignUp)
.post( 
    wrapAsync(userController.signUp)
);


// for login get and post
router.route("/login")
.get( userController.renderLogIn)
.post(
    saveRedirectUrl,
    passport.authenticate("local", {
        failureRedirect: "/login",
        failureFlash: true,
    }),
    userController.logIn
);


// for logout
router.get("/logout", userController.logOut);

module.exports = router;