function sendEmail() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("comment").value;

    // You can customize the email subject and body as needed
    var subject = "Portfolio Contact Form Submission";
    var body = "Name: " + name + "\nEmail: " + email + "\nMessage: " + message;

    // Replace 'your-email@example.com' with your actual email address
    var mailtoLink = "mailto: portfoliocontact2024@gmail.com" +
                     "?subject=" + encodeURIComponent(subject) +
                     "&body=" + encodeURIComponent(body);

    // Open the default email client with the pre-filled details
    window.location.href = mailtoLink;
}




// const express = require('express');
// const nodemailer = require('nodemailer');
// const bodyParser = require('body-parser');

// const app = express();

// app.use(bodyParser.urlencoded({ extended: true }));

// app.post('/send-email', (req, res) => {
//     const { name, email, comment } = req.body;

//     // Create a Nodemailer transporter
//     const transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//             user: 'portfoliocontact2024@gmail.com', // Your email address
//             pass: 'Portfolio@2024' // Your email password
//         }
//     });

//     // Email content
//     const mailOptions = {
//         from: 'portfoliocontact2024@gmail.com',
//         to: email,
//         subject: name,
//         text: comment
//     };

//     // Send email
//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//             console.error(error);
//             res.status(500).send('Internal Server Error');
//         } else {
//             console.log('Email sent: ' + info.response);
//             res.status(200).send('Email sent successfully');
//         }
//     });
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });

