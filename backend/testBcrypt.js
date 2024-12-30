const bcryptjs = require('bcryptjs');
const password = '123456'; // كلمة المرور المدخلة
const hashedPassword = '$$2b$10$LMp0XszizX4XMObiThM/guYtlXF.4/uREBzoFBgDZOF98HKJbMa2e'; // الكلمة المشفرة في قاعدة البيانات

bcryptjs.compare(password.trim(), hashedPassword, (err, result) => {
  if (err) {
    console.error('Error comparing passwords:', err);
  } else {
    console.log('Passwords match:', result);  // إذا كانت المقارنة صحيحة ستُطبع true
  }
});
