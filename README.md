
# ChatBot Application

Welcome to the ChatBot Application! This is a MERN stack-based chatbot application that allows users to ask questions and receive intelligent responses from the AI, integrated with various services like Gemini API, Clerk, and ImageKit for enhanced functionality.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- **AI-Powered Responses**: Users can ask questions, and the AI provides intelligent, conversational responses.
- **User Authentication**: Secure user authentication and authorization using Clerk.
- **Image Support**: Users can upload images to enhance their questions, securely handled by ImageKit.
- **Real-Time Interaction**: Real-time communication enabled using Socket.io for a seamless user experience.
- **Responsive Design**: A user-friendly and responsive interface built with React.

## Tech Stack

- **Frontend**: React, Clerk (for authentication)
- **Backend**: Node.js, Express, Gemini API (for AI integration)
- **Database**: MongoDB (NoSQL database)
- **Storage**: ImageKit (for image handling)
  
## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your machine
- MongoDB installed and running
- A Clerk account for user authentication
- An ImageKit account for image handling
- A Gemini API key for AI integration

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/chatbot-application.git
   cd chatbot-application
   ```

2. **Install the dependencies for both the server and client**:

   ```bash
   # Install server dependencies
   cd server
   npm install

   # Install client dependencies
   cd ../client
   npm install
   ```

3. **Set up your environment variables**:

   Create a `.env` file in the root of the `server` directory and add your environment variables. Refer to the [Environment Variables](#environment-variables) section for the required variables.

## Environment Variables

Create a `.env` file in the `server` directory and add the following:

```plaintext
MONGO_URI=your_mongo_db_connection_string
PORT=your_server_port
CLERK_API_KEY=your_clerk_api_key
IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint
GEMINI_API_KEY=your_gemini_api_key
```

## Usage

1. **Run the server**:

   ```bash
   cd server
   npm run dev
   ```

2. **Run the client**:

   Open a new terminal window and run:

   ```bash
   cd client
   npm start
   ```

3. **Access the application**:

   Open your browser and navigate to `http://localhost:3000`.

4. **Ask Questions**:

   Log in using your credentials. You can now start asking questions to the AI. Simply type your question into the chat input, and the AI will respond.

## API Endpoints

Key API endpoints used in this application:

- **User Authentication**: Handled by Clerk; refer to Clerk documentation for endpoints.
- **Image Uploads**: Handled by ImageKit.
- **Chatbot Interaction**:
  - `POST /api/chat`: Send a question to the chatbot.
  - `GET /api/chat`: Retrieve the AI's response.
- **AI Integration**: Directly powered by the Gemini API.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a Pull Request.
