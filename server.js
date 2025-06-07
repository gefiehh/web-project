const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Подключение к MongoDB
mongoose.connect('mongodb://localhost:27017/portfolio', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const diplomaSchema = new mongoose.Schema({
  filename: String,
  originalname: String,
  mimetype: String,
  path: String,
  createdAt: { type: Date, default: Date.now }
});
const Diploma = mongoose.model('Diploma', diplomaSchema);

// Настройка хранения файлов
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});
const upload = multer({ storage });

// Загрузка файлов
app.post('/api/upload', upload.array('files'), async (req, res) => {
  try {
    const docs = await Diploma.insertMany(req.files.map(file => ({
      filename: file.filename,
      originalname: file.originalname,
      mimetype: file.mimetype,
      path: file.path
    })));
    res.status(200).json(docs);
  } catch (error) {
    res.status(500).json({ error: 'Ошибка загрузки файлов' });
  }
});

// Получение всех дипломов
app.get('/api/diplomas', async (req, res) => {
  try {
    const diplomas = await Diploma.find().sort({ createdAt: -1 });
    res.json(diplomas);
  } catch (error) {
    res.status(500).json({ error: 'Ошибка получения дипломов' });
  }
});

// Удаление диплома
app.delete('/api/delete/:id', async (req, res) => {
  try {
    const diploma = await Diploma.findByIdAndDelete(req.params.id);
    if (diploma) {
      fs.unlinkSync(diploma.path);
      res.sendStatus(200);
    } else {
      res.status(404).json({ error: 'Файл не найден' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Ошибка удаления диплома' });
  }
});

app.listen(PORT, () => console.log(`Сервер запущен на http://localhost:${PORT}`));

