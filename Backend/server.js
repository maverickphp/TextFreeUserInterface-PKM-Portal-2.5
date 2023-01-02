const express = require("express");
const app = express();
const multer = require("multer");
const nodemailer = require("nodemailer");
const cors = require("cors");
app.use(cors()); // for parsing application/json
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// Set up the multer middleware
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now());
  },
});

const upload = multer({ storage: storage });

app.post("/api/send-email", upload.array("files"), (req, res) => {
  console.log(req.files);
  const { contact, cnic } = req.body;
  // Get the uploaded files and create an array of attachments
  const attachments = req.files.map((file) => {
    return {
      filename: file.originalname,
      path: file.path,
    };
  });

  // Create the email HTML
  const html = `
    <p>Contact: ${contact}</p>
    <p>CNIC: ${cnic}</p>
    <p>Here are the uploaded files:</p>
    <ul>
      ${attachments
        .map(
          (attachment) =>
            `<li><a href="${attachment.path}">${attachment.filename}</a></li>`
        )
        .join("")}
    </ul>
  `;

  const transporter = nodemailer.createTransport({
    host: "premium195.web-hosting.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "admin@devnigma.com",
      pass: "devnigma123",
    },
  });

  // Send the email
  transporter.sendMail(
    {
      from: "admin@devnigma.com",
      to: "admin@devnigma.com",
      subject: "Form submission",
      html,
      attachments,
    },
    (error, info) => {
      if (error) {
        console.error(error);
        res.send({ success: false, error });
      } else {
        console.log(info);
        res.send({ success: true });
      }
    }
  );

  res.send({ success: true });
});

app.listen(8081, () => {
  console.log("Server listening on port 8081");
});
