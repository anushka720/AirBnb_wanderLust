const User = require("../models/user.js");

// to get signup form
module.exports.renderSignUp = (req, res) =>{
    res.render("users/signup.ejs");
}


// signup post route
module.exports.signUp = async(req, res) => {
    try{
        let{username, email, password} = req.body;
        const newUser = new User({email, username});
        const registeredUser = await User.register(newUser, password);
        console.log(registeredUser);
        // automatic login to user after signup-
        req.login(registeredUser, (err) => {
            if(err) {
                return next(err);
            }
            req.flash("success", "Welcome to Wanderlust!");
            res.redirect("/listings");
        });
    } catch(e){
        req.flash("error", e.message);
        res.redirect("/signup");
    }
    
}

// to get login form
module.exports.renderLogIn = (req, res) =>{
    res.render("users/login.ejs");
}

// login post route
module.exports.logIn = async(req, res) => {
    req.flash("success", "welcome to wanderlust!");
    let redirectUrl = res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
}

// logout
module.exports.logOut = (req, res, next)=>{
    req.logout((err) =>{
        if(err){
            return next(err);
        }
        req.flash("success", "you have been logged out!");
        res.redirect("/listings");
    });
}