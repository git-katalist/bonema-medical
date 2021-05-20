export default function (req, res) {
    require("dotenv").config();

    let nodemailer = require("nodemailer");
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "mail.bonema.co.za",
        auth: {
            user: process.env.user,
            pass: process.env.password,
        },
        secure: true,
    });

    const mailData = {
        from: process.env.user,
        to: "bokang.mosala@bonema.co.za",
        subject: `Message From ${req.body.name}`,
        text: req.body.message + " | Sent from: " + req.body.email,
        html: `<h4>Sent from: ${req.body.name}</h4><h4>Contact Number: ${req.body.number}</h4>
        <h4>${req.body.email}</h4><div>${req.body.message}</div>`,
    };

    transporter.sendMail(mailData, function (err, info) {
        if (err) console.log(err);
        else console.log(info);
    });

    console.log(req.body);
    res.send("success");
}
