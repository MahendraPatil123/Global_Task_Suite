import React, { useState } from 'react';
import {
  TextField,
  Button,
  Grid,
  Typography,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Container,
  Snackbar,
  Alert,
} from '@mui/material';

const Createtask = () => {
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [assignedUser, setAssignedUser] = useState('');
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openError, setOpenError] = useState(false);

  // Get current date
  const currentDate = new Date().toISOString().split('T')[0];

  const handleSubmit = async (event) => {
    event.preventDefault();
    const taskData = {
      TaskName: taskName,
      TaskDesc: description,
      DueDate: dueDate,
      AssignedTo: assignedUser,
      CreatedBy: 'Mahendra',
      CreatedDate: currentDate, // Use current date dynamically
      Status: 'To Do',
      TaskID: Math.floor(Math.random() * 1000) + 1, // Mock ID generation, replace with backend logic
    };

      // Log the task data to console
      console.log('Data being sent to API:', taskData);
    try {
      const response = await fetch('http://127.0.0.1:5000/createTask', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(taskData),
      });

      if (response.ok) {
        setOpenSuccess(true);
      } else {
        throw new Error('Failed to create task');
      }
    } catch (error) {
      console.error('Error:', error);
      setOpenError(true);
    }
  };

  const handleClose = () => {
    setOpenSuccess(false);
    setOpenError(false);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        Create New Task
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Task Name"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              variant="outlined"
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              variant="outlined"
              multiline
              rows={4}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Due Date"
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth variant="outlined" required>
              <InputLabel>Assign To</InputLabel>
              <Select
                value={assignedUser}
                onChange={(e) => setAssignedUser(e.target.value)}
                label="Assign To"
              >
                <MenuItem value="testuser">testuser</MenuItem>
                <MenuItem value="Jyoti Shahoo">Jyoti Shahoo</MenuItem>
                <MenuItem value="Chandrakala">Chandrakala</MenuItem>
                <MenuItem value="Mahendra Mohan Patil">Mahendra Mohan Patil</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
            >
              Create Task
            </Button>
          </Grid>
        </Grid>
      </form>

      {/* Success Snackbar */}
      <Snackbar
        open={openSuccess}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Task created successfully!
        </Alert>
      </Snackbar>

      {/* Error Snackbar */}
      <Snackbar
        open={openError}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          Failed to create task. Please try again.
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Createtask;
