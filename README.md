# Aio3 Updated - Modern Website with Node.js Backend

A modern, full-stack website featuring a sleek black-themed loading screen, comprehensive Node.js backend, and organized project structure.

## 🚀 Features

### Frontend
- **Modern Black Theme Loader**: Sleek loading screen with animated spinner, progress bar, and dynamic text
- **Responsive Design**: Mobile-first approach with modern CSS animations
- **Interactive Elements**: Smooth transitions and engaging user experience

### Backend
- **Express.js Server**: Fast, unopinionated web framework
- **MongoDB Integration**: NoSQL database with Mongoose ODM
- **JWT Authentication**: Secure user authentication and authorization
- **File Upload System**: Support for multiple file types with size limits
- **Email Integration**: Contact form with automatic email notifications
- **Input Validation**: Comprehensive request validation and sanitization
- **Security Features**: Helmet.js, CORS, rate limiting, and more

## 🏗️ Project Structure

```
aio3-updated/
├── public/                 # Static frontend files
│   ├── index.html         # Main website
│   ├── css/               # Stylesheets
│   │   └── loader.css     # Loader styles
│   └── js/                # Frontend JavaScript
│       └── loader.js      # Loader functionality
├── routes/                 # API route handlers
│   ├── auth.js            # Authentication routes
│   ├── users.js           # User management routes
│   ├── contact.js         # Contact form routes
│   └── upload.js          # File upload routes
├── models/                 # Database models
│   └── User.js            # User schema and methods
├── middleware/             # Custom middleware
│   └── auth.js            # JWT authentication middleware
├── config/                 # Configuration files
│   └── database.js        # MongoDB connection
├── utils/                  # Utility functions
│   └── helpers.js         # Common helper functions
├── server.js               # Main server file
├── package.json            # Project dependencies
└── config.env.example      # Environment variables template
```

## 🛠️ Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- MongoDB (local or cloud)

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd aio3-updated
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   ```bash
   cp config.env.example .env
   # Edit .env with your configuration
   ```

4. **Database Setup**
   - Install MongoDB locally or use MongoDB Atlas
   - Update `MONGO_URI` in your `.env` file

5. **Email Configuration** (Optional)
   - Set up Gmail app password
   - Update email credentials in `.env`

## 🚀 Running the Application

### Development Mode
```bash
npm run dev
```
Server runs on `http://localhost:3000`

### Production Mode
```bash
npm start
```

### Full Stack Development
```bash
npm run dev:full
```
Runs both backend and frontend in development mode

## 📡 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user (protected)

### User Management
- `GET /api/users/profile` - Get user profile (protected)
- `PUT /api/users/profile` - Update user profile (protected)
- `PUT /api/users/password` - Change password (protected)
- `DELETE /api/users/profile` - Delete account (protected)

### Contact Form
- `POST /api/contact` - Submit contact form

### File Upload
- `POST /api/upload/single` - Upload single file (protected)
- `POST /api/upload/multiple` - Upload multiple files (protected)
- `DELETE /api/upload/:filename` - Delete file (protected)

## 🔧 Configuration

### Environment Variables
- `NODE_ENV` - Environment (development/production)
- `PORT` - Server port (default: 3000)
- `MONGO_URI` - MongoDB connection string
- `JWT_SECRET` - JWT signing secret
- `EMAIL_USER` - Gmail username
- `EMAIL_PASS` - Gmail app password
- `ADMIN_EMAIL` - Admin notification email

### Security Features
- **Helmet.js**: Security headers
- **CORS**: Cross-origin resource sharing
- **Rate Limiting**: API request throttling
- **Input Validation**: Request data sanitization
- **JWT Tokens**: Secure authentication

## 🎨 Customization

### Loader Styling
Edit `public/css/loader.css` to customize:
- Colors and themes
- Animation timing
- Progress bar styles
- Text content and fonts

### Backend Features
- Add new API routes in `routes/` directory
- Create new models in `models/` directory
- Implement custom middleware in `middleware/` directory

## 📱 Frontend Features

### Modern Loader
- **Animated Spinner**: Smooth rotating animation
- **Progress Bar**: Visual loading progress
- **Dynamic Text**: Changing status messages
- **Responsive Design**: Works on all devices
- **Smooth Transitions**: Elegant fade-out effects

### Interactive Elements
- **Contact Form**: User-friendly input fields
- **File Upload**: Drag-and-drop interface
- **User Dashboard**: Profile management
- **Responsive Layout**: Mobile-optimized design

## 🚀 Deployment

### Local Development
```bash
npm run dev
```

### Production Deployment
1. Set `NODE_ENV=production`
2. Configure production MongoDB
3. Set secure JWT secret
4. Use PM2 or similar process manager
5. Set up reverse proxy (Nginx/Apache)

### Docker Deployment
```dockerfile
FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
```

## 🧪 Testing

### API Testing
Use tools like Postman or Insomnia to test endpoints:
- Import the API collection
- Set environment variables
- Test authentication flow
- Verify file uploads

### Loader Testing
- Open `public/index.html` in browser
- Test different screen sizes
- Verify smooth animations
- Check loading states

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Check the documentation
- Review the code examples

## 🔄 Updates

### Recent Changes
- ✅ Added Node.js backend with Express
- ✅ Implemented MongoDB integration
- ✅ Added JWT authentication system
- ✅ Created file upload functionality
- ✅ Added contact form with email
- ✅ Implemented comprehensive API
- ✅ Added security middleware
- ✅ Organized project structure

### Future Enhancements
- [ ] User dashboard interface
- [ ] Admin panel
- [ ] Real-time notifications
- [ ] Image optimization
- [ ] Caching system
- [ ] Analytics integration
- [ ] Multi-language support
- [ ] PWA features

---

**Built with ❤️ using Node.js, Express, MongoDB, and modern web technologies**
