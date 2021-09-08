import nodemailer from 'nodemailer';
import sgTransport from 'nodemailer-sendgrid-transport';

const transporter = {
  auth: {
    // Use SendGrid API key
    api_key: process.env.NEXT_PUBLIC_SENDGRID_API,
  },
};

const mailer = nodemailer.createTransport(sgTransport(transporter));

export default async (req, res) => {
  console.log(req.body);
  const { firstName, lastName, email, subject, text } = req.body;

  const data = {
    to: 'david.maguire@vpc-solutions.com',
    from: 'daniel@saas.ie',
    subject: `${subject}`,
    replyTo: `${email}`,
    text: text,
    html: `
            <b>From:</b> ${firstName} ${lastName} <br />
            <b>Email:</b> ${email} <br />
            <b>Message:</b> ${text}
        `,
  };

  try {
    const response = await mailer.sendMail(data);
    console.log(response);
    res.status(200).send('Email send successfully');
  } catch (error) {
    console.log(error);
    res.status(500).send('Error proccessing charge');
  }
};
