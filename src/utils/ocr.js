import Tesseract from 'tesseract.js';

export async function extractDigits(image) {
  const result = await Tesseract.recognize(image, 'eng', {
    tessedit_char_whitelist: '123456789',
  });
  return result.data.text;
}
