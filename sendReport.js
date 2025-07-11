const nodemailer = require("nodemailer");
const fs = require("fs");

async function sendReport() {
  const transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    secure: false,
    auth: {
      user: "fernanda.silva@harpix.com.br",
      pass: "Ayla123@", // troque por senha correta e segura depois!
    },
  });

 const htmlReport = fs.readFileSync("./cypress/reports/index.html", "utf8");


  const info = await transporter.sendMail({
    from: '"Relatórios Cypress" <fernanda.silva@harpix.com.br>',
    to: "fernanda.silva@harpix.com.br",
    subject: "📄 Relatório dos testes Cypress",
    html: htmlReport,
  attachments: [
  {
    filename: "index.html",
    path: "./cypress/reports/index.html",
  },
],
  });

  console.log("✅ E-mail enviado: %s", info.messageId);
}

sendReport().catch(console.error);

