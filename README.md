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
*   **Forgot Password:** Allows users to request a password reset link via email.
*   **Reset Password:** Users can reset their password using a secure token.

## Technologies Used

*   **Framework:** [Next.js](https://nextjs.org/)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **UI Library:** [React](https://reactjs.org/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Database:** [MongoDB](https://www.mongodb.com/) (with [Mongoose](https://mongoosejs.com/))
*   **Authentication:** [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken), [bcryptjs](https://github.com/dcodeIO/bcrypt.js)
*   **API Communication:** [axios](https://axios-http.com/)
*   **Emailing:** [Nodemailer](https://nodemailer.com/)
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
*   `POST /api/users/forgotpassword`: Send a password reset link to the user's email.
*   `POST /api/users/resetpassword`: Reset the user's password using a token.

## Pages

The following pages are available:

*   `/`: The home page.
*   `/login`: The login page.
*   `/signup`: The signup page.
*   `/profile`: The user profile page.
*   `/forgot-password`: The forgot password page.
*   `/reset-password`: The reset password page.
*   `/verify-email`: The verify email page.

## Folder Structure

The folder structure of the project is as follows:

*   `src/app`: Contains the pages of the application.
*   `src/app/api`: Contains the API routes of the application.
*   `src/dbConfig`: Contains the database configuration.
*   `src/helpers`: Contains the helper functions.
*   `src/models`: Contains the database models.
*   `public`: Contains the public assets of the application.

## Environment Variables

The following environment variables are used in the project:

*   `MONGO_URI`: The connection string for the MongoDB database.
*   `TOKEN_SECRET`: The secret key for signing the JWT.
*   `NODEMAILER_USER`: The email address for sending emails.
*   `NODEMAILER_PASS`: The password for the email address.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/your-feature-name`).
3.  Make your changes.
4.  Commit your changes (`git commit -m 'Add some feature'`).
5.  Push to the branch (`git push origin feature/your-feature-name`).
6.  Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Linting

To run the linter and check for code quality issues:

```sh
npm run lint
```
