# Never-Ending Todo App - Frontend

## Overview

This is the frontend part of the Never-Ending Todo App, a React-based web application for managing todo tasks. This project is designed to work in conjunction with the backend API to provide a full-featured todo management experience.

## Project Structure

The project follows a standard React application structure:

```
Never-Ending-Todo-App-FrontEnd/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── hooks/
│   ├── pages/
│   ├── recoil/
│   ├── services/
│   ├── store/
│   ├── styles/
│   ├── utils/
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .env
├── .eslintrc.cjs
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

## Technologies Used

- React
- Recoil (for state management)
- Axios (for API requests)
- Vite (as build tool)

## Live Demo

Experience the Never-Ending Todo App in action:

- Frontend: [https://never-ending-todo-app-frontend.onrender.com/](https://never-ending-todo-app-frontend.onrender.com/)
- Backend API: [https://never-ending-todo-app-backend.onrender.com](https://never-ending-todo-app-backend.onrender.com)

### State of the Application
<details>
  <summary>16.07.2024</summary>

    1. Basic React Todo App Structure
    2. Implemented core components (NavBar, TodoList, TodoItem)
    3. Set up basic routing with React Router
    4. Initialized state management with Recoil
</details>

<details>
  <summary>19.07.2024</summary>

    1. Enhanced User Authentication
      - Implemented JWT-based authentication
      - Added login and signup pages
      - Created protected routes for authenticated users

    2. Improved Todo Management
      - Implemented CRUD operations for todos
      - Added ability to mark todos as complete
      - Integrated with backend API for todo persistence

    3. User Profile Management
      - Created user profile page
      - Implemented profile editing functionality
      - Added option to delete user account

    4. Axios Integration
      - Implemented custom Axios instance for API calls
      - Centralized API request configuration
      - Added interceptors for token handling and error management

    These updates significantly enhance the application's functionality, user experience, and code quality. Future iterations will focus on performance optimization, additional features, and improved testing coverage.
</details>

## Getting Started

1. Clone the repository:
   ```
   git clone https://github.com/YourUsername/Never-Ending-Todo-App-FrontEnd.git
   cd Never-Ending-Todo-App-FrontEnd
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add the necessary environment variables, including the backend API URL:
   ```
   VITE_REACT_APP_BACKEND_URL=http://your-backend-url.com
   ```

4. Run the development server:
   ```
   npm run dev
   ```

## Features

- User authentication (signup, login, logout)
- Create, read, update, and delete todo items
- User profile management
- Responsive design for various screen sizes

## Project Structure Details

- `components/`: Reusable React components
- `hooks/`: Custom React hooks (e.g., `useSignout`)
- `pages/`: Main page components (Home, Login, Signup, TodoList, Profile)
- `recoil/`: Recoil atoms and selectors for state management
- `store/`: Additional state management (Recoil atoms)
- `utils/`: Utility functions and custom Axios instance

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).