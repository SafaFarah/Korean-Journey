const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // الاتصال بقاعدة البيانات MongoDB
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Error connecting to the database", error);
    process.exit(1); // إنهاء التطبيق في حالة حدوث خطأ في الاتصال
  }
};

module.exports = connectDB;
