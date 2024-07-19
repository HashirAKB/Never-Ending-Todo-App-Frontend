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