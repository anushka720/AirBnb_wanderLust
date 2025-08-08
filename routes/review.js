// this file is here to model or restructure the review section of project

const express = require("express");
// we have used mergedParams here kyuki our child reviews could not merge with :id in parent route
const router = express.Router({mergeParams: true}); 
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const {validateReview, isLoggedIn, isReviewAuthor} = require("../middleware.js");
const reviewController = require("../controllers/reviews.js");




// reviews
// post review route
router.post(
    "/",
    isLoggedIn,
    validateReview, 
    wrapAsync (reviewController.createReview)
);

// delete review route
router.delete(
    "/:reviewId", 
    isLoggedIn,
    isReviewAuthor,
    wrapAsync(reviewController.destroyReview)
);

module.exports = router;