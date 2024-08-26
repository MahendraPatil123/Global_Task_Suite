// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { MsalProvider, useMsal, AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
// import msalInstance from "../authConfig";


// const LoginButton = () => {
//     const { instance } = useMsal();
  
//     const handleLogin = () => {
//       instance.loginRedirect();
//     };
  
//     return <button onClick={handleLogin}>Login with Azure AD</button>;
//   };
  
//   const LogoutButton = () => {
//     const { instance } = useMsal();
  
//     const handleLogout = () => {
//       instance.logoutRedirect();
//     };
  
//     return <button onClick={handleLogout}>Logout</button>;
//   };

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();

//     // Replace this with your actual login logic
//     if (username === 'spar' && password === 'spar') {
//       // Redirect to the dashboard
//       navigate('/dashboard');
//     } else {
//       alert('Invalid credentials');
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={handleLogin}>
//         <div>
//           <label>Username:</label>
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// // return (
// //     <MsalProvider instance={msalInstance}>
// //       <AuthenticatedTemplate>
// //         <h1>Welcome, you are logged in!</h1>
// //         <LogoutButton />
// //       </AuthenticatedTemplate>
// //       <UnauthenticatedTemplate>
// //         <h1>Please log in</h1>
// //         <LoginButton />
// //       </UnauthenticatedTemplate>
// //     </MsalProvider>
// //   );
// };

// export default Login;

import React, {useState} from 'react';
import { Container, Box, TextField, Button, Typography, Paper } from '@mui/material';
import { styled } from '@mui/system';

const StyledContainer = styled(Container)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
});

const StyledPaper = styled(Paper)({
  padding: '2rem',
  maxWidth: '400px',
  width: '100%',
  backgroundColor: '#f0f0f0',
});

const Login = () => {

    const [inputPasswordValue, setInputPasswordValue] = useState('');
    const [inputEmailValue, setInputEmailValue] = useState('');

    const handleInputPasswordChange = (event) => {
        setInputPasswordValue(event.target.value);
      };
      const handleInputEmailChange = (event) => {
        setInputEmailValue(event.target.value);
      };

      const handleSubmit = (e) => {
        console.log("==================",e);
        e.preventDefault();
    
        // Replace this with your actual login logic
        if (e === 'spar' && e === 'spar') {
          // Redirect to the dashboard
          navigate('/dashboard');
        } else {
          alert('Invalid credentials');
        }
      };

  return (
    <StyledContainer>
      <StyledPaper elevation={3}>
        <Typography variant="h4" align="center" gutterBottom>
          Login
        </Typography>
        <Box component="form" noValidate autoComplete="off">
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={handleInputEmailChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handleInputPasswordChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{
              backgroundColor: 'black',
              '&:hover': {
                backgroundColor: 'gray',
              },
            }}
            onSubmit={handleSubmit}
          >
            Sign In
          </Button>
        </Box>
      </StyledPaper>
    </StyledContainer>
  );
};

export default Login;

