# 🩺 Doctors Appointment Website

A responsive doctor appointment booking web application built with React.js. The application allows users to browse doctors by speciality, create an account, log in, select an available appointment slot, manage appointments, and update their profile.

## 📌 Project Overview

The **Doctors Appointment Website** is a frontend-focused healthcare web application developed to practice React.js, component-based development, routing, state management, and browser-based data persistence.

The application provides a simple appointment workflow:

**Browse Doctors → Select Speciality → View Doctor → Choose Date & Time → Book Appointment → Manage Appointment**

This project currently works as a **client-side application** and uses browser `localStorage` for storing user and appointment information.

## ✨ Features

### 👨‍⚕️ Doctor Browsing

* View a list of doctors with their speciality, experience, consultation fee, and description.
* Filter doctors by speciality.
* Open an individual doctor's appointment page.

### 📅 Appointment Booking

* Select an appointment date from the next five available days.
* Select a predefined appointment time slot.
* Book an appointment after logging in.
* View booked appointments in the **My Appointments** section.

### 👤 User Authentication

* Create a new user account using name, email, and password.
* Log in using registered credentials.
* Maintain the currently logged-in user using `localStorage`.

> **Note:** This is frontend/demo authentication. Credentials are stored in browser `localStorage` and are not handled by a secure backend.

### 📋 Appointment Management

* View booked appointments.
* Cancel an appointment.
* Delete a cancelled appointment.
* Display appointment details including doctor, speciality, date, and time.

### 💳 Payment Demo

* Includes a simulated payment interface with options such as GPay and PhonePe.
* The payment action is currently a demonstration only and does not process real payments.

### 👤 Profile Management

* View and edit basic profile information.
* Update name, email, phone, address, gender, and date of birth.
* Upload and preview a profile image.
* Save updated profile information in browser `localStorage`.

### 🎨 User Interface

* Responsive and clean React-based interface.
* Reusable components for navigation, doctors, specialities, and footer.
* Separate pages for home, doctors, appointments, profile, login, signup, about, and contact.

## 🛠️ Tech Stack

### Frontend

* **React.js**
* **JavaScript (ES6+)**
* **HTML5**
* **CSS3**

### Libraries & Tools

* **React Router DOM**
* **Vite**
* **ESLint**
* **npm**
* **Git**
* **GitHub**
* **VS Code**

### Data Persistence

* **Browser Local Storage**

## 🧩 React Concepts Used

This project uses several core React concepts:

* Functional components
* `useState`
* `useEffect`
* Props
* Event handling
* Conditional rendering
* List rendering with `map()`
* React Router
* URL parameters
* Component reusability
* Browser `localStorage`

## 📂 Project Structure

```text
doctors-appointment-website/
│
├── public/
│   ├── favicon.svg
│   └── icons.svg
│
├── src/
│   ├── components/
│   │   ├── DoctorCard.jsx
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   └── SpclCard.jsx
│   │
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Appointment.jsx
│   │   ├── Contact.jsx
│   │   ├── Doctors.jsx
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── MyAppointments.jsx
│   │   ├── MyProfile.jsx
│   │   └── Signup.jsx
│   │
│   ├── styles/
│   │   ├── About.css
│   │   ├── Appointment.css
│   │   ├── Contact.css
│   │   ├── DoctorCard.css
│   │   ├── Doctors.css
│   │   ├── Footer.css
│   │   ├── Home.css
│   │   ├── Login.css
│   │   ├── MyAppointments.css
│   │   ├── MyProfile.css
│   │   ├── Navbar.css
│   │   ├── Signup.css
│   │   └── SpclCard.css
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── vite.config.js
└── README.md
```

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/sutirtha44g/doctors-appointment-website.git
```

### 2. Navigate to the Project

```bash
cd doctors-appointment-website
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

Open the local URL displayed in the terminal to view the application.

## 🔄 Application Flow

```text
Home
  ↓
Browse Doctors
  ↓
Filter by Speciality
  ↓
Select Doctor
  ↓
Appointment Page
  ↓
Select Date & Time
  ↓
Login / Sign Up if required
  ↓
Book Appointment
  ↓
My Appointments
  ↓
Cancel / Delete / Payment Demo
```

## 💾 Data Storage

This project uses the browser's **Local Storage API** instead of a backend database.

The application stores information such as:

* Registered users
* Current logged-in user
* Selected doctor
* Booked appointments
* Profile information

This approach was chosen to keep the project simple and demonstrate client-side state and persistence without requiring a server.

## ⚠️ Current Limitations

This is a frontend project for learning and demonstration purposes.

* No backend server is currently implemented.
* No SQL/NoSQL database is connected.
* Authentication is client-side and is not suitable for production.
* Passwords are stored in browser `localStorage` for demonstration purposes.
* Payment options are simulated and do not process real transactions.
* Doctor information is currently stored in frontend code.
* Appointment availability is based on predefined time slots.

## 🔮 Future Improvements

Possible improvements for a production-ready version include:

* Build a Node.js and Express.js backend.
* Connect a database such as MongoDB or MySQL.
* Implement secure authentication and password hashing.
* Store doctor and appointment data on the server.
* Add real-time doctor availability.
* Prevent appointment conflicts.
* Integrate a secure payment gateway.
* Add email or SMS appointment notifications.
* Add separate doctor and patient dashboards.

## 🎯 Learning Outcomes

Through this project, I practiced:

* Building reusable React components.
* Managing component state with hooks.
* Implementing client-side routing.
* Handling forms and user input.
* Implementing filtering and conditional rendering.
* Persisting data with browser `localStorage`.
* Structuring a React project into components, pages, and styles.
* Using Git and GitHub for version control.

## 👩‍💻 Author

**Sutirtha Giri**

Computer Science & Engineering Student

GitHub: [github.com/sutirtha44g](https://github.com/sutirtha44g)

## 📄 License

This project is created for educational and portfolio purposes.
