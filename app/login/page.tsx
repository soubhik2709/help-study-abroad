"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  Alert,
} from "@mui/material";
import { useAuthStore } from "@/store/authStore";

export default function LoginPage() {
  const [username, setUsername] = useState("");  
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const login = useAuthStore((s) =>s.login);

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      await login(username, password);
      router.push("/dashboard/users");
    } catch (err: unknown) {
       if (err instanceof Error) {
    setError(err.message);
  } else {
    setError("Something went wrong");
  }
    }
  };

  return (
    <Box
  sx={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    bgcolor: "#f5f5f5",
  }}
    >
      <Paper elevation={3} sx={{ p: 4, width: "100%", maxWidth: 400 }}>
        <Typography variant="h5" sx={{ mb:3, fontWeight:"bold"}}>
          Admin Login
        </Typography>
        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <TextField
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            fullWidth
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            fullWidth
          />
          <Button type="submit" variant="contained" size="large" fullWidth>
            Login
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}
