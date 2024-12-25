const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  // الحصول على التوكن من رأس الطلب (Authorization)
  const token = req.header("Authorization")?.replace("Bearer ", "");

  // إذا لم يتم إرسال التوكن
  if (!token) {
    return res.status(401).json({ error: "Authentication required" });
  }

  try {
    // التحقق من صحة التوكن باستخدام المفتاح السري
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // تخزين الـ userId المستخرج من التوكن في الـ request
    req.userId = decoded.userId;

    // الانتقال إلى الدالة التالية في السلسلة
    next();
  } catch (error) {
    // إذا كان التوكن غير صالح أو منتهي الصلاحية
    res.status(401).json({ error: "Invalid or expired token" });
  }
};

module.exports = authMiddleware;
