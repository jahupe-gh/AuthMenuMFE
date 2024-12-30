import React, { useState } from "react";
import {
  Button,
  TextField,
  Paper,
  Avatar,
  Typography,
  Container,
  Box,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f0f2f5",
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(2),
    width: "100%",
    maxWidth: "400px", // Set a max-width for better responsiveness
    boxSizing: "border-box",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Ensure the form takes the full width
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Login = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Hardcoded credentials
    const hardcodedEmail = "test@example.com";
    const hardcodedPassword = "password123";
    if (email === hardcodedEmail && password === hardcodedPassword) {
      navigate("/dashboard"); // Redirect to dashboard on successful login
    } else {
      alert("Invalid credentials");
    }
    console.log("Login submitted:", { email, password });
  };

  return (
    <div className={classes.container}>
      <Container component="main" maxWidth="xs">
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              width={40}
              height={40}
              bgcolor="#9c27b0"
              borderRadius="50%"
            >
              <LockOutlinedIcon style={{ color: "#fff" }} />
            </Box>
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
            <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
              <Box gridColumn="span 12" mb={2}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Box>
              <Box gridColumn="span 12" mb={4}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Box>
            </Box>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
          </form>
        </Paper>
      </Container>
    </div>
  );
};

export default Login;
