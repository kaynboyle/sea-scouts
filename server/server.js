const express = require("express");
const cluster = require("cluster");
const numCPUs = require("os").cpus().length;

const cors = require("cors");

const isDev = process.env.NODE_ENV !== "production";

// Multi-process to utilize all CPU cores.
if (!isDev && cluster.isMaster) {
  console.error(`Node cluster master ${process.pid} is 
running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.error(
      `Node cluster worker 
${worker.process.pid} exited: code ${code}, signal ${signal}`
    );
  });
} else {
  const PORT = process.env.PORT || 8001;
  const app = express();
  const morgan = require("morgan");
  const path = require("path");

  app.use(
    cors({
      origin: ["https://localhost:3001/contact-us.com", "http://127.0.0.1:5500"],
    })
  );

  // Priority serve any static files.
  // Replace the example to connect to your frontend.
  app.use(express.static(path.join(__dirname, "/src/App.js")));

  // dev middleware
  app.use(morgan("dev"));

  // configure body parser for AJAX requests
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  const routes = require("./routes/routes");

  // after all middleware functions
  app.use("/", routes);

  app.listen(PORT, function () {
    console.error(
      `Node ${
        isDev ? "dev server" : "cluster worker " + process.pid
      }: listening on port ${PORT}`
    );
  });
}