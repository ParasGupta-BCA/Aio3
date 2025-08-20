# 🚀 Quick Start Guide - Aio3 Updated

Get your modern website with Node.js backend running in minutes!

## ⚡ Quick Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Setup
```bash
# Copy environment template
cp config.env.example .env

# Edit .env with your settings
# At minimum, set JWT_SECRET and MONGO_URI
```

### 3. Start Development Server
```bash
npm run dev
```

Your website is now running at `http://localhost:3000`! 🎉

## 🔧 Essential Configuration

### Minimum Required Settings
```env
NODE_ENV=development
PORT=3000
JWT_SECRET=your-super-secret-key-here
MONGO_URI=mongodb://localhost:27017/aio3-website
```

### Optional Email Setup
```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
ADMIN_EMAIL=admin@yourwebsite.com
```

## 📱 What You Get

### Frontend
- ✅ Modern black theme loader
- ✅ Responsive design
- ✅ Smooth animations
- ✅ Interactive elements

### Backend
- ✅ Express.js server
- ✅ MongoDB database
- ✅ JWT authentication
- ✅ File upload system
- ✅ Contact form API
- ✅ User management
- ✅ Security middleware

## 🧪 Test Your Setup

### 1. Loader Test
- Open `http://localhost:3000`
- Watch the sleek loading animation
- Verify smooth fade-out transition

### 2. API Test
```bash
# Test contact form
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","subject":"Hello","message":"Testing"}'
```

### 3. Database Test
- Check MongoDB connection in console
- Verify user registration works
- Test login functionality

## 🚀 Next Steps

### Add More Features
- Create new API routes in `routes/`
- Add database models in `models/`
- Implement custom middleware
- Extend frontend functionality

### Customize Loader
- Edit `public/css/loader.css` for styling
- Modify `public/js/loader.js` for behavior
- Update loading messages and timing

### Deploy to Production
- Set `NODE_ENV=production`
- Configure production database
- Set secure environment variables
- Use PM2 for process management

## 🆘 Common Issues

### Port Already in Use
```bash
# Change port in .env
PORT=3001
```

### MongoDB Connection Failed
```bash
# Check if MongoDB is running
# Or use MongoDB Atlas cloud database
```

### JWT Errors
```bash
# Ensure JWT_SECRET is set in .env
# Use a strong, unique secret key
```

## 📚 Learn More

- Check `README.md` for detailed documentation
- Review API endpoints in route files
- Explore middleware and utility functions
- Customize the loader to match your brand

---

**Ready to build something amazing? Start coding! 🎯**
