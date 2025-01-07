# Korean-Journey

## Overview

**Korean Learning App** is a web-based application designed to help users learn the Korean language through interactive flashcards. This app allows users to explore different groups of flashcards, track their progress, add favorite cards for quick review, and listen to the correct pronunciation of Korean words/phrases.

The app consists of:
- A **flashcard system** to display Korean words/phrases and their translations.
- A **progress tracker** to track how many flashcards the user has reviewed.
- A **favorites feature** to add cards for quick reference.
- **Audio** support for pronunciation practice.

## Key Features

- **Flashcard Groups**: View cards organized into groups (e.g., food, greetings, common verbs).
- **Interactive Flashcards**: Each flashcard features a word/phrase in Korean, with its English translation and an optional audio pronunciation.
- **Favorites**: Users can add cards to their favorites list and easily access them for revision.
- **Progress Tracking**: Track the percentage of reviewed flashcards and monitor learning progress.
- **Audio Pronunciation**: Listen to how the Korean words/phrases are pronounced.

---

## Prerequisites

Ensure that the following software is installed on your system:

- **Node.js** (Recommended LTS version) — [Download Node.js](https://nodejs.org/)
- **MongoDB** (For backend data storage) — [MongoDB Installation Guide](https://www.mongodb.com/try/download/community)

You also need to have an **npm** or **yarn** package manager to install dependencies.

---

## Setting Up the Application

### Backend Setup (Server Side)

1. Clone the repository and navigate to the backend folder:

    ```bash
    git clone https://github.com/SafaFarah/Korean-Journey.git
    cd Korean-Journey/backend
    ```

2. Install the backend dependencies:

    ```bash
    npm install
    ```

3. Set up MongoDB for data storage:
   - Create a MongoDB Atlas account or use a local MongoDB installation.
   - Add your MongoDB URI to the **`.env`** file (found in the backend folder).

    Example `.env` file:
    ```env
    MONGO_URI=mongodb://your-database-uri
    JWT_SECRET=your-jwt-secret-key
    ```

4. Start the backend server:

    ```bash
    npm start
    ```

   The server will be running on `http://localhost:5000` (default URL).

### Frontend Setup (Client Side)

1. Navigate to the frontend directory:

    ```bash
    cd frontend
    ```

2. Install the frontend dependencies:

    ```bash
    npm install
    ```

3. Make sure your API URL in the frontend code points to your backend (`http://localhost:5000` or your live server URL).

4. Start the frontend React application:

    ```bash
    npm start
    ```

   The frontend app will be accessible at `http://localhost:3000`.

---

## How to Use

1. **Sign Up & Login**
   - Open the app in your browser.
   - Sign up with your email and password. Upon successful registration, you will be logged in automatically.
   - If you're an existing user, simply log in with your email and password.

2. **Explore Flashcards**
   - Once logged in, you can browse different **flashcard groups** like "Food", "Greetings", and more.
   - Each group contains a set of cards displaying Korean words and their English translation.

3. **Track Progress**
   - You can monitor your study progress as a percentage. The progress is updated as you go through and study the cards.
   - The **progress bar** indicates how many cards you have completed relative to your total card count.

4. **Favorites**
   - You can mark your favorite cards by clicking the star icon. These cards are then added to your favorites list for easy access.
   - Use this feature to keep track of difficult words you want to review later.

5. **Review Audio**
   - Every flashcard has an associated audio file, which helps in learning the proper pronunciation of the Korean words/phrases. Click the speaker icon to hear the pronunciation.

6. **Progress Page**
   - The progress page allows users to see a summary of their study progress (percentage) as well as the total number of cards they have learned.

---

## API Endpoints

### **1. Cards Endpoints**

- **Get Cards for a Group**  
  - **URL**: `/api/cards/:group`  
  - **Method**: `GET`  
  - **Description**: Retrieve a list of flashcards for the specific group.  
  - **Params**: `group` (Group name such as "greetings" or "food")

- **Add to Favorites**  
  - **URL**: `/api/favorites/toggle`  
  - **Method**: `POST`  
  - **Description**: Add or remove a card from the user's favorites list.  
  - **Body**: `{ cardId: "card_id_here" }`

- **Get Favorites**  
  - **URL**: `/api/favorites`  
  - **Method**: `GET`  
  - **Description**: Retrieve the list of cards marked as favorites.

### **2. Progress Endpoints**

- **Get User Progress**  
  - **URL**: `/api/progress`  
  - **Method**: `GET`  
  - **Description**: Retrieve the user's current progress (number of flashcards reviewed).

- **Update Progress**  
  - **URL**: `/api/progress/update`  
  - **Method**: `PUT`  
  - **Description**: Update the progress when a user reviews a card.  
  - **Body**: `{ cardId: "card_id_here" }`

### **3. Authentication Endpoints**

- **User Signup**  
  - **URL**: `/api/auth/signup`  
  - **Method**: `POST`  
  - **Description**: Register a new user with email and password.  
  - **Body**: `{ email: "email_here", password: "password_here" }`

- **User Login**  
  - **URL**: `/api/auth/login`  
  - **Method**: `POST`  
  - **Description**: Log in with existing credentials.  
  - **Body**: `{ email: "email_here", password: "password_here" }`

---

## Technologies Used

### Backend
- **Node.js** – Backend runtime environment.
- **Express.js** – Web framework for creating APIs.
- **MongoDB** – NoSQL database for storing data.
- **Mongoose** – MongoDB object modeling.

### Frontend
- **React.js** – Frontend framework for building dynamic UIs.
- **React Router** – For handling routing between pages.
- **Tailwind CSS** – A utility-first CSS framework for styling the application.
- **Axios/Fetch API** – For making HTTP requests to the backend API.

### Tools
- **JWT** for User Authentication.
- **NodeMailer** for any email-related features (if applicable in your future enhancements).

---

## Folder Structure

```plaintext
- /backend
  - /controllers: Business logic for users, cards, progress, favorites.
  - /models: Mongoose models for MongoDB schema.
  - /routes: API routes for handling requests.
  - /middleware: Authentication and authorization middleware.
  - /utils: Any helper functions and constants.
  
- /frontend
  - /components: React components such as flashcards, header, progress bar.
  - /pages: React page components like home, group view, and progress view.
  - /services: API calls for data fetching and mutation.
  - /assets: Images, audio files, and fonts.
