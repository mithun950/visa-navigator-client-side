# Visa Navigator Portal

The **Visa Navigator Portal** simplifies the process of checking visa requirements, applying for visas online, and tracking visa applications. This project is designed to provide a seamless user experience with robust functionality and a dynamic user interface.

## Features

### Core Features:

1. **Homepage**:

   - Displays Latest visa.
   - Highlights the latest visa updates.

2. **Visa Details**:

   - View comprehensive details about visa types, processing times, fees, and requirements.

3. **Application Management**:

   - Users can apply for visas directly from the portal.
   - Track application statuses in real time.

4. **Authentication**:

   - User registration and login using Firebase Authentication.
   - Persistent user sessions with PrivateRoutes.

5. **PrivateRoutes**:

   - Secure access to user-specific pages such as "My Applications" and "My Profile."

6. **Error Handling**:

   - Custom 404 page for invalid routes.
   - User-friendly validation messages for forms.

7. **Dynamic UI**:

   - Responsive and accessible design optimized for all devices.
   - Tailored navigation based on user authentication state.

8. **Notifications**:

   - Real-time alerts for application status changes using React Toastify.

---

## Technologies Used

### Frontend:

- **React.js**: Component-based library for building a dynamic user interface.
- **TailwindCSS & DaisyUI**: For modern and responsive UI design.
- **React Router**: For routing and navigation.
- **React Toastify**: For user notifications.

### Backend:

- **Node.js & Express.js**: Server-side framework to manage API requests.
- **MongoDB**: Database to store visa, user, and application data.
- **JWT (JSON Web Tokens)**: For secure user authentication.

### Authentication:

- **Firebase Authentication**: Handles user login, registration, and session management.

### Hosting:

- **Frontend**: Deployed on Netlify.
- **Backend**: Deployed on Render.

---

## Project Workflow

1. **User Authentication**:

   - Users register or log in using Firebase Authentication.
   - Logged-in users access private pages like "My Applications."

2. **Visa Search and Details**:

   - Users search for visas by country or type.
   - Detailed visa information is displayed, including fees and requirements.

3. **Application Process**:

   - Users fill out visa applications and submit them.
   - Application statuses are updated and viewable in the "My Applications" section.

4. **Protected Routes**:

   - Pages like "Add Campaign" or "My Donations" are protected by PrivateRoutes.

5. **Error Handling**:

   - Invalid URLs redirect to a custom 404 page.
   - Validation errors provide clear feedback.

---

## Project Structure

### Frontend Structure:

- **src/components**: Reusable UI components (e.g., Navbar, VisaCards, Modals).
- **src/pages**: Pages like Home, Login, Register, VisaDetails, and Dashboard.
- **src/context**: Context API for global state management.
- **src/routes**: Private and public route configurations.

### Backend Structure:

- **routes/**: API endpoints for visa, user, and application data.
- **models/**: MongoDB schemas for visa, user, and application entities.
- **controllers/**: Business logic for API requests.

---

## Installation and Setup

### Frontend Setup:

1. Clone the repository:
   ```bash
   git clone <frontend-repo-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd visa-navigator-frontend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```

### Backend Setup:

1. Clone the repository:
   ```bash
   git clone <backend-repo-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd visa-navigator-backend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```env
     MONGO_URI=<your-mongodb-connection-string>
     JWT_SECRET=<your-jwt-secret>
     ```
5. Start the server:
   ```bash
   npm run start
   ```

---

## Deployment

### Frontend:

- Deployed on [Firebase]

### Backend:

- Deployed on [vercel]

---

## Usage Guide

- **User Registration**:

  1. Visit the Registration Page.
  2. Fill in the required details.
  3. Log in to access personalized features.

- **Visa Search**:

  - Enter a country or visa type in the search bar.
  - Click on a visa to view detailed information.

- **Application Management**:

  - Submit visa applications from the details page.
  - Track application status in the "My Applications" section.

- **Admin Features**:

  - Manage visa details (Add, Edit, Delete).

---

## Contribution Guidelines

1. Fork the repository.
2. Create a new branch for your feature:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Added a new feature"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-name
   ```
5. Create a pull request.

##Project-live-link:

[https://visa-navigate-6d091.web.app/](https://visa-navigate-6d091.web.app/)

---

## Contact

For any queries or feedback, feel free to reach out:

- **Email**: [mithunrony46@gmail.com](mailto\:mithunrony46@gmail.com)
- **GitHub**: https\://github.com/mithun950

