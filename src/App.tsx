// import React from "react";
// import { MsalProvider, useMsal, AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
// import msalInstance from "./authConfig";

// const LoginButton = () => {
//   const { instance } = useMsal();

//   const handleLogin = () => {
//     instance.loginRedirect();
//   };

//   return <button onClick={handleLogin}>Login with Azure AD</button>;
// };

// const LogoutButton = () => {
//   const { instance } = useMsal();

//   const handleLogout = () => {
//     instance.logoutRedirect();
//   };

//   return <button onClick={handleLogout}>Logout</button>;
// };

// const App = () => {
//   return (
//     <MsalProvider instance={msalInstance}>
//       <AuthenticatedTemplate>
//         <h1>Welcome, you are logged in!</h1>
//         <LogoutButton />
//       </AuthenticatedTemplate>
//       <UnauthenticatedTemplate>
//         <h1>Please log in</h1>
//         <LoginButton />
//       </UnauthenticatedTemplate>
//     </MsalProvider>
//   );
// };

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Createtask from './pages/CreateTask';

const theme = createTheme({
  // You can customize the theme here
});


const App = () => {
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/createtask" element={<Createtask />} />
      </Routes>
    </Router>
  </ThemeProvider>
    
  );
};

export default App;

