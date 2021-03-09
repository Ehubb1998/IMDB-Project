const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const bearerToken = require("express-bearer-token");
const userRouter = require("./routes/users");
const movieRouter = require("./routes/movies");
app.use(cors({origin: true}));
app.use(bearerToken());
app.use(express.json());
app.use("/users", userRouter);
app.use("/movies", movieRouter);
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "pug");

const router = express.Router();

// Static routes
// Serve React build files in production
if (process.env.NODE_ENV === 'production') {
  const path = require('path');
  // Serve the frontend's index.html file at the root route
  router.get('/', (req, res) => {
    res.cookie('XSRF-TOKEN', req.csrfToken());
    res.sendFile(
      path.resolve(__dirname, '../frontend', 'build', 'index.html')
    );
  });

  // Serve the static assets in the frontend's build folder
  router.use(express.static('../frontend/build'));

  // Serve the frontend's index.html file at all other routes NOT starting with /api
  router.get(/^(?!\/?api).*/, (req, res) => {
    res.cookie('XSRF-TOKEN', req.csrfToken());
    res.sendFile(
      path.resolve(__dirname, '../frontend', 'build', 'index.html')
    );
  });
}

// Add a XSRF-TOKEN cookie in development
if (process.env.NODE_ENV !== 'production') {
  router.get('/api/csrf/restore', (req, res) => {
    res.cookie('XSRF-TOKEN', req.csrfToken());
    res.status(201).json({});
  });
}

// app.get("/sign-up", (req, res) => {
//     res.render("sign-up")
// });
// app.get("/log-in", (req, res) => {
//     res.render("log-in")
// });

app.use(router);

app.use((req, res, next) => {
    const err = new Error("The requested resource couldn't be found.");
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    const errMsg = err.errors;

    res.json({
        title: err.title,
        errors: errMsg,
    });
});

module.exports = app;


// package.json start script that was removed
// "start": "nodemon -r dotenv/config ./bin/www",

// "test": "echo \"Error: no test specified\" && exit 1",
// "db:create": "dotenv sequelize-cli db:create",
// "db:drop": "dotenv sequelize-cli db:drop",
// "db:migrate": "dotenv sequelize-cli db:migrate",
// "db:migrate:undo:all": "dotenv sequelize-cli db:migrate:undo:all",
// "db:redo": "npm run db:seed:undo:all && npm run db:migrate:undo:all && npm run db:migrate && npm run db:seed:all",
// "db:seed:all": "dotenv sequelize-cli db:seed:all",
// "db:seed:undo:all": "dotenv sequelize-cli db:seed:undo:all",
// "dev": "dotenv nodemon ./bin/www",
// "migration:generate": "sequelize-cli migration:generate",
// "model:generate": "sequelize-cli model:generate",
// "seed:generate": "sequelize-cli seed:generate",
// "sequelize": "sequelize",
// "sequelize-cli": "sequelize-cli",
// "start": "node ./bin/www",
// "start:development": "nodemon -r dotenv/config ./bin/www",
// "start:production": "node ./bin/www"