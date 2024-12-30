const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors"); // إضافة مكتبة CORS
const authRoutes = require("./routes/authRoutes");
const deckRoutes = require("./routes/deckRoutes");
const flashcardRoutes = require("./routes/flashcardRoutes");
const progressRoutes = require("./routes/progressRoutes");
const authMiddleware = require("./middleware/authMiddleware");

dotenv.config();

const app = express();

// إعداد CORS
const corsOptions = {
  origin: "http://localhost:3000", // السماح بطلبات من النطاق المحدد
  credentials: true, // للسماح بإرسال ملفات تعريف الارتباط
};
app.use(cors(corsOptions));

// إعدادات التوصيل
app.use(express.json());
app.use(cookieParser());

// الاتصال بقاعدة البيانات
mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Error connecting to MongoDB: ", err));

// توجيه الطلبات إلى المسارات المختلفة
app.use("/api/auth", authRoutes);
app.use("/api/decks", authMiddleware, deckRoutes);
app.use("/api/flashcards", authMiddleware, flashcardRoutes);
app.use("/api/progress", authMiddleware, progressRoutes);

// بدء تشغيل الخادم
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
