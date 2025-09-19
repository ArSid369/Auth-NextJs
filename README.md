# Authentication System

This is a full-stack authentication system built with Next.js, providing a solid foundation for user management in modern web applications.

## Features

*   **User Registration:** New users can sign up for an account.
*   **User Login:** Registered users can log in to access protected content.
*   **Email Verification:** Users receive a verification email upon registration.
*   **JWT-based Authentication:** Secure, token-based authentication using JSON Web Tokens.
*   **Protected Routes:** Middleware to protect specific routes from unauthenticated access.
*   **Password Hashing:** User passwords are securely hashed before being stored in the database.
*   **User Profiles:** A dedicated page for users to view their information.

## Technologies Used

*   **Framework:** [Next.js](httpss://nextjs.org/) <img src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" height="20"/>
*   **Language:** [TypeScript](https://www.typescriptlang.org/) <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" height="20"/>
*   **UI Library:** [React](https://reactjs.org/) <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" height="20"/>
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/) <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" height="20"/>
*   **Database:** [MongoDB](https://www.mongodb.com/) (with [Mongoose](https://mongoosejs.com/)) <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" height="20"/>
*   **Authentication:** [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken), [bcryptjs](https://github.com/dcodeIO/bcrypt.js)
*   **API Communication:** [axios](https://axios-http.com/)
*   **Emailing:** [Nodemailer](https://nodemailer.com/) <img src="https://img.shields.io/badge/Nodemailer-2B5A8D?style=for-the-badge&logo=nodemailer&logoColor=white" alt="Nodemailer" height="20"/>
*   **Notifications:** [React Hot Toast](https://react-hot-toast.com/)

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

*   [Node.js](https://nodejs.org/) (v20 or later recommended)
*   [npm](https://www.npmjs.com/)
*   A [MongoDB](https://www.mongodb.com/) database instance (local or cloud-hosted)

### Installation

1.  **Clone the repository:**
    ```sh
    git clone <repository-url>
    cd auth
    ```

2.  **Install dependencies:**
    ```sh
    npm install
    ```

3.  **Set up environment variables:**
    Create a `.env` file in the root of the `auth` directory and add the following variables. Replace the placeholder values with your actual credentials.

    ```env
    MONGO_URI=your_mongodb_connection_string
    TOKEN_SECRET=your_jwt_secret_key
    NODEMAILER_USER=your_email_address
    NODEMAILER_PASS=your_email_password
    ```

### Running the Application

*   **Development Mode:**
    To run the app in development mode with live reloading:
    ```sh
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

*   **Production Build:**
    To build the application for production:
    ```sh
    npm run build
    ```

*   **Start Production Server:**
    To start the production server:
    ```sh
    npm run start
    ```

## API Endpoints

The following API endpoints are available:

*   `POST /api/users/signup`: Register a new user.
*   `POST /api/users/login`: Log in a user and get a JWT.
*   `POST /api/users/verifyemail`: Verify a user's email address.
*   `GET /api/users/me`: Get the current logged-in user's data.
*   `GET /api/users/logout`: Log out the current user.

## Linting

To run the linter and check for code quality issues:

```sh
npm run lint
```
