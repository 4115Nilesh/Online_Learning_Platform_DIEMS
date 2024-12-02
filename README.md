

# Online Learning Platform

## Overview 
 

The **Online Learning Platform** is a web application built using the MERN stack (MongoDB, Express.js, React.js, and Node.js) that facilitates online learning for students and instructors. It offers features such as user authentication, course management, video streaming, quizzes, and progress tracking. Designed for an intuitive user experience, this platform provides seamless access to learning resources.

---

## Features

 For Students
- **Browse Courses**: Explore available courses across various domains.
- **Enroll in Courses**: Enroll in free or paid courses.
- **Watch Lessons**: Stream video lectures and download supporting materials.
- **Track Progress**: View course progress and achievements.

For Instructors
- Create Courses**: Add and manage courses with videos, PDFs, and quizzes.
- Manage Enrollments**: View enrolled students and track their progress.


For Admins
- User Management**: Add, update, or remove users (students/instructors).
- Content Moderation**: Review and approve courses submitted by instructors.
- Analytics Dashboard**: Monitor platform usage and generate reports.

---

## Tech Stack

 Frontend
- **React.js**: For building a dynamic and responsive user interface.
- **Redux**: For state management.
- **Bootstrap/Tailwind CSS**: For styling components.

 Backend
- **Node.js**: For server-side logic.
- **Express.js**: For handling REST APIs.

### Database
- **MongoDB**: For storing user, course, and progress data.


---

## Installation and Setup

Follow these steps to run the project locally:

### Prerequisites
- **Node.js**: Ensure you have Node.js installed.
- **MongoDB**: Set up a local MongoDB instance or MongoDB Atlas.

### Clone Repository
```bash
git clone https://github.com/yourusername/online-learning-platform.git
cd online-learning-platform
```

### Install Dependencies
#### For Backend
```bash
cd backend
npm install
```

#### For Frontend
```bash
cd ../frontend
npm install
```

### Environment Variables
Create a `.env` file in the `backend` folder with the following:
```env
PORT=5000
MONGO_URI=your-mongodb-uri
JWT_SECRET=your-secret-key
CLOUDINARY_URL=your-cloudinary-url (optional, for media uploads)
```

### Run the Application
#### Start Backend
```bash
cd backend
npm start
```

#### Start Frontend
```bash
cd ../frontend
npm start
```

Visit `http://localhost:3000` in your browser to access the application.

---

## Project Structure

### Backend
```
backend/
├── controllers/
├── models/
├── routes/
├── utils/
└── server.js
```

### Frontend
```
frontend/
├── src/
│   ├── components/
│   ├── pages/
│   ├── redux/
│   ├── services/
│   └── App.js
└── public/
```

---



## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---
