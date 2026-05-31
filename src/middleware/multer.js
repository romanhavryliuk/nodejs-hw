import multer from 'multer';

// Додає інфу про файл як req.file
export const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 2 * 1024 * 1024,
  },
  fileFilter(req, file, callback) {
    if (!file.mimetype || !file.mimetype.startsWith('image/')) {
      // error
      return callback(new Error('Only images allowed'));
    }

    // success
    callback(null, true);
  },
});