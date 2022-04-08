require("dotenv").config();

const router = require("express").Router();
const path = require("path");
const nodemailer = require("nodemailer");

const transport = {
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.APP_PASS,
  },
};

const transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
  if (error) {
    console.error(error);
  } else {
    console.log("Ready to send mail!");
  }
});

router.get("/", (req, res, next) => {
  res.status(200).json({ msg: "Working" });
});

router.post("/", (req, res, next) => {
  console.log("body: ", req.body);
  const { name, email, tel, message, date } = req.body;

  //make mailable object
  const mail = {
    from: process.env.SMTP_EMAIL,
    to: process.env.SMTP_EMAIL,
    subject: "New Contact Form Submission",
    text: `
    from: ${name}
    email: ${email}
    phone: ${tel}
    date: ${date}
    message: ${message}`,
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      console.error(err);
      res.json({
        status: "fail",
      });
    } else {
      res.json({
        status: "success",
      });
    }
  });
});

// Answer API requests.
router.use("/api", function (req, res) {
  res.set("Content-Type", "application/json");
  res.send('{"message":"Hello from the custom server!"}');
});

// All remaining requests return the React app, so it can handle routing.
router.use("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "/react-ui/build", "index.html"));
});

module.exports = router;