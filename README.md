# AirBnb_wanderLust

A full-stack vacation rental platform where users can browse, create, and manage property listings across India — complete with categories like mountains, beaches, temples, and more.

---

##  Features

- *User Authentication*: Sign-up, login, and secure sessions via Passport.js  
- *Listing Management*: Create, edit, delete, and view listings with categories (mountains, beaches, temples, etc.)  
- *Reviews & Ratings*: Users can leave reviews on listings  
- *Flash Messages*: Friendly success/error notifications throughout  
- *Fully Responsive UI* with EJS templating and standardized layout components (header, footer, flash partials)  
- *MongoDB Atlas Support* with fallback to local MongoDB, plus streamlined seeding

---

##  Tech Stack

| Component         | Technology            |
|------------------|-----------------------|
| Backend          | Node.js, Express.js   |
| Database         | MongoDB with Mongoose |
| Views            | EJS (templating)      |
| Auth & Security  | Passport.js, express-session |
| Utilities        | connect-flash, method-override, dotenv |
| Styling          | CSS / Public Directory |
| Project Structure| MVC (controllers, models, routes, views, utils) |

---
Thank you so much!!
  MONGO_URL=<Your MongoDB URI>
  SESSION_SECRET=<Any secret phrase>
  CLOUDINARY_* (if using image uploads)
