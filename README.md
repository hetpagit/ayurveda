
# AyurYoga Scheduler

## Overview
Welcome to the Yoga Class Management System repository! This project is a web application built with React, Chakra UI, Node.js, and MySQL. It enables users to enroll in monthly yoga classes offered by Ayurveda Centre. "You can explore my Yoga Class Management System web application by visiting this [link](https://yoga-class-googleform.onrender.com)
."

## Demo
Home Page
![HomepageDemo](https://drive.google.com/uc?export=view&id=161dRX8U2JJEr3nxtg4jmOyDIxewOph-6)
Form
![formDemo](https://drive.google.com/uc?export=view&id=1iQgDKA8MQ5kWY2McXK9D0wCCfI2Ff1Q1)
Success Page
![SuccessPageDemo](https://drive.google.com/uc?export=view&id=1XlWnqFnqzXJtWCk-0yr56LhAXnJdf0Dx)
ER Diagram

![ER Diagram](https://drive.google.com/uc?export=view&id=1Yw1wvGIow84TE2iTPXi9aC5nDLh6v1g9)

## Features
- **Responsive Design:** The application is designed to provide a seamless user experience across various devices and screen sizes.
- **Admission Form:** Users can complete an admission form, providing essential personal details, choosing a class batch, and making monthly payments.
- **QR Code Payment:** The system generates a QR code for users to scan and make a payment of INR 500 for registration.
- **Database Integration:** User data is stored in a MySQL database to maintain accurate records.

## Project Structure
- **frontend:** Contains the React frontend code, including components and pages.
  - **src/components:** Reusable UI components.
  - **src/pages:** Pages representing different views.
  - **src/App.js:** Main component defining the application routes.
  - **src/index.js:** Entry point rendering the React app.
  - **src/App.css:** Styles for the application.
- **backend:** Holds the Node.js server code responsible for handling admission requests and interacting with the database.
  - **server.js:** Express server setup with API endpoints.
  - **routes/admission.js:** Express router for handling admission-related API requests.
- **database:** MySQL database setup script.
  - **admissiondata.sql:** SQL script to create the `admissiondata` table.

## Dependencies

### Frontend
- **react:** JavaScript library for building user interfaces.
- **react-router-dom:** Library for declarative routing in React applications.
- **@chakra-ui/react:** Chakra UI is a simple, modular, and accessible component library for React.
- **qrcode.react:** Generates QR codes for payment.

#### Development Dependencies
- **react-scripts:** Scripts and configuration used by Create React App.
- **axios:** HTTP client for making API requests.

### Backend
- **express:** Web application framework for Node.js.
- **mysql2:** MySQL database driver for Node.js.
- **cors:** Middleware for enabling Cross-Origin Resource Sharing.

#### Development Dependencies
- **dotenv:** Loads environment variables from a .env file.

## Setup

### Frontend
1. Navigate to the `frontend` directory.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.

### Backend
1. Navigate to the `backend` directory.
2. Run `npm install` to install dependencies.
3. Set up your MySQL database and update the connection details in `server.js`.
4. Run `node server.js` to start the Node.js server.

## Usage
1. Access the application at [http://localhost:3000](http://localhost:3000).
2. Fill out the admission form, choose a batch, and make a payment using the provided QR code.
3. Successful submissions redirect to the `/success` page.

## Contributing
Contributions are welcome! Feel free to open issues or submit pull requests.

## License
This project is licensed under the [MIT License](LICENSE).



