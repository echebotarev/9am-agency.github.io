import { defineEventHandler, readBody } from "h3";
import nodemailer from "nodemailer";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: config.mail,
      pass: config.pwd,
    },
    secure: true, // upgrades later with STARTTLS -- change this based on the PORT
  });

  const body = await readBody(event);

  const mailData = {
    from: config.mail,
    to: config.mailTo,
    subject: "Заявка с сайта 9am agency",
    text: `Заявка с сайта! Имя: ${body.name} Телефон: ${body.phone} Сообщение: ${body.message}`,
    html: `<b>Заявка с сайта! </b><br> Имя: ${body.name}<br/> Телефон: ${body.phone}<br/> Сообщение: ${body.message}<br/>`,
  };

  const result = await transporter.sendMail(mailData);
  return { body: "ok", status: "success" };
});
