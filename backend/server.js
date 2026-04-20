const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const nodemailer = require('nodemailer');

const app = express();
app.use(cors());
app.use(express.json());

// =====================
// Konfiguracja e-mail
// =====================
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER || 'jakub.kuzakowski@gmail.com',
    pass: process.env.GMAIL_APP_PASSWORD || 'WSTAW_HASLO_APLIKACJI',
  },
});

// =====================
// Konfiguracja zapisu plików
// =====================
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const fileFilter = (req, file, cb) => {
  const allowedMimeTypes = ['image/jpeg', 'image/png', 'application/pdf', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'];
  if (allowedMimeTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Nieobsługiwany format pliku.'), false);
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10 MB
});

// =====================
// Endpoint: Upload pliku
// =====================
app.post('/api/upload', upload.single('clientMaterial'), (req, res) => {
  try {
    res.status(200).json({ message: 'Plik zapisany pomyślnie.', file: req.file });
  } catch (error) {
    res.status(400).json({ message: 'Błąd podczas wgrywania pliku.' });
  }
});

// =====================
// Endpoint: Formularz kontaktowy
// =====================
app.post('/api/contact', upload.single('clientMaterial'), async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // Walidacja
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Imię, email i wiadomość są wymagane.' });
    }

    // Walidacja e-mail (prosty regex)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: 'Podaj prawidłowy adres e-mail.' });
    }

    // Przygotowanie załącznika
    const attachments = [];
    if (req.file) {
      attachments.push({
        filename: req.file.originalname,
        path: req.file.path,
      });
    }

    // Wysłanie e-maila
    await transporter.sendMail({
      from: `"WebGoat Formularz" <jakub.kuzakowski@gmail.com>`,
      to: 'jakub.kuzakowski@gmail.com',
      replyTo: email,
      subject: `Nowe zapytanie od ${name} — WebGoat`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2e86c1; border-bottom: 2px solid #2e86c1; padding-bottom: 10px;">
            Nowe zapytanie z formularza kontaktowego
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <tr>
              <td style="padding: 8px 12px; font-weight: bold; color: #555; width: 140px;">Imię i Nazwisko:</td>
              <td style="padding: 8px 12px;">${name}</td>
            </tr>
            <tr style="background: #f8f9fa;">
              <td style="padding: 8px 12px; font-weight: bold; color: #555;">Email:</td>
              <td style="padding: 8px 12px;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; font-weight: bold; color: #555;">Telefon:</td>
              <td style="padding: 8px 12px;">${phone || 'Nie podano'}</td>
            </tr>
          </table>
          <div style="margin-top: 20px; padding: 16px; background: #f8f9fa; border-radius: 8px;">
            <h3 style="color: #333; margin-top: 0;">Wiadomość:</h3>
            <p style="color: #555; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
          ${req.file ? '<p style="margin-top: 16px; color: #888;">📎 Załączono plik: ' + req.file.originalname + '</p>' : ''}
          <hr style="margin-top: 24px; border: none; border-top: 1px solid #eee;" />
          <p style="color: #aaa; font-size: 12px;">Wiadomość wysłana z formularza kontaktowego WebGoat</p>
        </div>
      `,
      attachments,
    });

    res.status(200).json({ message: 'Wiadomość wysłana pomyślnie.' });
  } catch (error) {
    console.error('Błąd wysyłania e-maila:', error);
    res.status(500).json({ message: 'Nie udało się wysłać wiadomości. Spróbuj ponownie.' });
  }
});

app.listen(5000, () => {
  console.log('Serwer WebGoat działa na porcie 5000');
});