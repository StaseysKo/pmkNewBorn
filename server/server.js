const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });

const app = express();

const corsOptions = {
  origin: 'http://localhost:3001',
  methods: 'POST',
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

const transporter = nodemailer.createTransport({
    host: 'smtp.yandex.ru',
    port: 465,
    secure: true,
    auth: {
      user: 'staseys.ko@yandex.ru',
      pass: 'ozceptrjpbtsbejh'
    }
});

app.post('/send-email', upload.array('files'), bodyParser.json(), (req, res) => {
    const { formType, ...formData } = req.body;
  
    let mailOptions;
  
    if (formType === 'mainFeedback') {
      const { fullName, email, phoneNumber, employeeSelection, sourcePage } = formData;
  
      mailOptions = {
        from: 'staseys.ko@yandex.ru',
        to: 'kolyubatskystas@gmail.com',
        subject: 'Новая заявка с сайта',
        text: `Имя: ${fullName}\nПочта: ${email}\nТелефон: ${phoneNumber}\nС кем нужна конультация: ${employeeSelection}\nПримечание: ${sourcePage}`
      };
    } 

    else if (formType === 'vacancyFeedBack') {
      const { fullName, email, phoneNumber, sourcePage } = formData;
  
      mailOptions = {
        from: 'staseys.ko@yandex.ru',
        to: 'kolyubatskystas@gmail.com',
        subject: 'Новый отклик на вакансию',
        text: `Имя: ${fullName}\nПочта: ${email}\nТелефон: ${phoneNumber}\nПримечание: ${sourcePage}`
      };
    } 

    else if (formType === 'callBackForm') {
      const { fullName, phoneNumber, info, sourcePage } = formData;
  
      mailOptions = {
        from: 'staseys.ko@yandex.ru',
        to: 'kolyubatskystas@gmail.com',
        subject: 'Заказан обратный звонок',
        text: `Имя: ${fullName}\nТелефон: ${phoneNumber}\nТема обращения: ${info}\nПримечание: ${sourcePage}`
      };
    }
    
    else if (formType === 'specialistConsultation') {
      const { fullName, phoneNumber, sourcePage, manager } = formData;

      let managerMail = '';

      if(manager == 'Алексей Буланов') {
        managerMail = 'staseys.ko@yandex.ru'
      } else {
        managerMail = 'staskolyubatsky@gmail.com'
      }
  
      mailOptions = {
        from: 'staseys.ko@yandex.ru',
        to: ['kolyubatskystas@gmail.com', managerMail],
        subject: 'Нужна консультация по услуге',
        text: `Имя: ${fullName}\nТелефон: ${phoneNumber}\nПримечание: ${sourcePage}`
      };
    } 

    else if (formType === 'stillHaveQuestions') {
      const { fullName, email, phoneNumber, addPlusInfo, sourcePage } = formData;
  
      mailOptions = {
        from: 'staseys.ko@yandex.ru',
        to: 'kolyubatskystas@gmail.com',
        subject: 'Задан новый вопрос',
        text: `Имя: ${fullName}\nПочта: ${email}\nТелефон: ${phoneNumber}\nВопрос: ${addPlusInfo}\nПримечание: ${sourcePage}`
      };
    } 

    else if (formType === 'supplyFeedBack') {
      const { company, taxNumber, contactPerson, phoneNumber, email, typeMetal, steelGrade, formMetal, scopeOfSupply, message, sourcePage } = formData;
  
      mailOptions = {
        from: 'staseys.ko@yandex.ru',
        to: 'kolyubatskystas@gmail.com',
        subject: 'Новая заявка на поставку материала',
        text: `Компания: ${company}\nИНН: ${taxNumber}\nКонтактное лицо: ${contactPerson}\nТелефон: ${phoneNumber}\nEmail: ${email}\nВид металла: ${typeMetal}\nМарка стали: ${steelGrade}\nФорма металла: ${formMetal}\nВозможный объем поставки: от ${scopeOfSupply[0]} до ${scopeOfSupply[1]} тонн\nДополнительная информация: ${message}\nПримечание: ${sourcePage}`
      };
    } 

    else if (formType === 'submitApplication') {
      const { company, contactPerson, email, phoneNumber, objectInfo, addPlusInfo, sourcePage, manager } = formData;

      const attachments = req.files ? req.files.map(file => ({
        filename: file.originalname,
        content: file.buffer,
        contentType: file.mimetype
      })) : [];

      let managerMail = '';

      if(manager == 'Алексей Буланов') {
        managerMail = 'staseys.ko@yandex.ru'
      } else {
        managerMail = 'staskolyubatsky@gmail.com'
      }
  
      mailOptions = {
        from: 'staseys.ko@yandex.ru',
        to: ['kolyubatskystas@gmail.com', managerMail],
        subject: 'Новая заявка на сотрудничество',
        text: `Наименование организации: ${company}\nКонтактное лицо: ${contactPerson}\nПочта: ${email}\nТелефон: ${phoneNumber}\nНаименование и адрес объекта: ${objectInfo}\nДополнительная информация: ${addPlusInfo}\nПримечание: ${sourcePage}`,
        attachments: attachments
      };
    } 
    
    else {
      return res.status(400).send('Invalid form type');
    }
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.status(500).send(error.toString());
      }
      res.status(200).send('Email sent: ' + info.response);
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
