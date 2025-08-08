// this file is here to model or restructure the routes of the project

const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const {isLoggedIn, isOwner, validateListing } = require("../middleware.js");
// multer is used for handling multipart/ford-data
const multer  = require('multer')
const {storage} = require("../cloudConfig.js");
const upload = multer({storage});


// controller 
const listingController = require("../controllers/listings.js");


// index route and create route
router
.route("/")
.get( wrapAsync (listingController.index))
.post(
    isLoggedIn,
    upload.single("listing[image]"),
    validateListing,
    wrapAsync (listingController.createListing)
);


// new route
router.get("/new",isLoggedIn, listingController.renderNewForm);


// show route, update route and delete route
router.route("/:id")
.get(wrapAsync(listingController.showListing))
.put( 
    isLoggedIn,
    isOwner,
    upload.single("listing[image]"),
    validateListing,
    wrapAsync (listingController.updateListing)
)
.delete(
    isLoggedIn,
    isOwner, 
    wrapAsync (listingController.destroyListing)
);


// edit route
router.get(
    "/:id/edit",
    isLoggedIn,
    isOwner, 
    wrapAsync (listingController.renderEditForm)
);


module.exports = router;