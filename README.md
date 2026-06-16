# MedMitra Web Application - SIH 2024

MedMitra is a Smart India Hackathon 2024 web application focused on online testing, monitoring, and quality-related support for medicines and consumables. The project combines a modern web interface, backend APIs, database support, and AI integration to create an interactive prototype.

## Project Overview

The purpose of this project is to build a digital platform that helps users manage and interact with medicine/consumable quality-related information. It was developed as a hackathon-style solution where speed, clarity, practical implementation, and team collaboration were important.

## What This Project Does

- Provides a web interface for medicine and consumable quality-related workflows
- Uses a React-based frontend for a responsive user experience
- Uses a Node.js and Express backend for API handling
- Stores application data using MongoDB
- Integrates Google Generative AI for smart responses and AI-assisted functionality
- Demonstrates full-stack development in a hackathon environment

## Tech Stack

### Frontend

- React
- Vite
- Tailwind CSS
- JavaScript

### Backend

- Node.js
- Express.js
- MongoDB
- dotenv
- nodemon

### AI Integration

- Google Generative AI

## Project Structure

```text
SIH-2024/
├── frontend/          # React + Vite frontend
├── backend/           # Node.js + Express backend
└── README.md
```

The exact folder structure may vary depending on the latest project updates.

## Prerequisites

Before running the project, install:

- Node.js
- npm
- MongoDB or MongoDB Atlas connection
- Google Generative AI API key, if AI features are enabled

## Backend Setup

1. Clone the repository:

```bash
git clone https://github.com/ParkhiyaParth/SIH-2024.git
```

2. Go to the backend folder:

```bash
cd SIH-2024/backend
```

3. Install dependencies:

```bash
npm install
```

4. Create a `.env` file and add required configuration:

```env
MONGO_URI=your_mongodb_connection_string
GOOGLE_API_KEY=your_google_generative_ai_key
PORT=5000
```

5. Start the backend server:

```bash
npm run start:backend
```

If the script name is different, run the entry file using:

```bash
node server.js
```

or

```bash
nodemon server.js
```

## Frontend Setup

1. Open a new terminal and move to the frontend folder:

```bash
cd SIH-2024/frontend
```

2. Install dependencies:

```bash
npm install
```

3. Start the frontend development server:

```bash
npm run dev
```

4. Open the app in your browser:

```text
http://localhost:5173
```

## How to Run the Full Project

Run backend and frontend in two separate terminals:

```bash
# Terminal 1
cd backend
npm run start:backend
```

```bash
# Terminal 2
cd frontend
npm run dev
```

## Key Features

- Clean and responsive user interface
- Full-stack architecture
- MongoDB-based data storage
- AI-powered interaction using Google Generative AI
- Developer-friendly project structure
- Hackathon-ready prototype implementation

## Learning Outcomes

Through this project, I practiced:

- React and Vite frontend development
- Tailwind CSS styling
- Node.js and Express backend development
- MongoDB integration
- AI API integration
- Building a project under hackathon constraints
- Team-based software development

## Future Improvements

- Add screenshots and demo video
- Add proper API documentation
- Add authentication if required
- Improve error handling
- Add deployment instructions
- Add testing workflow

## Author

**Parth Parkhiya**

GitHub: [ParkhiyaParth](https://github.com/ParkhiyaParth)
