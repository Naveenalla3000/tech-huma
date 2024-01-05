require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const http = require("http");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require('path');


const { loggerRoute, Approuter, unknownRotes } = require("./routes/app.router.js");

const { userRouter } = require('./routes/userRoutes/user.routes.js')

const { ErrorMiddleware } = require("./middlewares/ErrorMiddleware/Error.js");


//middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

const server = http.createServer(app);

app.use(
  cors({
    origin: process.env.EXPRESS_CORS_ORIGIN,
    methods: ["*"],
    credentials: true,
  })
);

// logger router
app.use("/", loggerRoute);


// health_test router
app.use("/api/v1/test", Approuter);


//user router
app.use("/api/v1/user", userRouter);

// app.use("/api/v1/user", userRouter);
// Serve frontend
if (process.env.EXPRESS_NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/dist')));

  app.get('*', (req, res) =>
    res.sendFile(
      path.resolve(__dirname, '../', 'client', 'dist', 'index.html')
    )
  );
} else {
  app.get('/', (req, res) => res.send('Please set to production'));
}

//unknown routes
app.all("*", unknownRotes);

// ErrorHandler
app.use(ErrorMiddleware);


module.exports = { server };