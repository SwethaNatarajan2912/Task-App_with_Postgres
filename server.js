const express = require("express");

const app = express();

// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));


const router = require("./app/routes/tutorial.routers")
app.use(router)

const db = require("./app/models/.")

//
db.sequelize.sync().then(() => {
    console.log("Drop and re-sync db.");
});

// sequelize.sync() - This creates the table if it doesn't exist (and does nothing if it already exists)
// sequelize.sync({ force: true }) - This creates the table, dropping it first if it already existed
// sequelize.sync({ alter: true }) - This checks what is the current state of the table in the database (which columns it has, what are their data types, etc), and then performs the necessary changes in the table to make it match the model.
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
