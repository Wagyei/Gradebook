import React from 'react';
import { TextField, Grid, Button, Typography, Container, IconButton } from '@mui/material';
import SelectMenu from '../selectMenu';
import { useState } from 'react';
import AddIconButton from '../buttons/addIconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const ContinuousAssessmentConfigurationForm = () => {

  const [subjects, setSubjects] = useState(['Physics', 'Chemistry', 'Biology'])
  const [classes, setClasses] = useState(['Class 1', 'Class 2', 'Class 3'])

  const [exercises, setExercises] = useState([{ id: 1, label: 'Exercise 1' }, { id: 2, label: 'Exercise 2' }]);
  const [classTests, setClassTests] = useState([{ id: 1, label: 'Class Test 1' }, { id: 2, label: 'Class Test 2' }]);
  const [homeworks, setHomeworks] = useState([{ id: 1, label: 'Homework 1' }, { id: 2, label: 'Homework 2' }]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic
  };

  const handleAddExercise = () => {
    const newExercise = {
      id: exercises.length + 1,
      label: `Exercise ${exercises.length + 1}`
    };
    setExercises([...exercises, newExercise]);
  };

  const handleAddHomework = () => {
    const newHomework = {
      id: homeworks.length + 1,
      label: `Homework ${homeworks.length + 1}`
    };
    setHomeworks([...homeworks, newHomework]);
  };

  const handleAddClassTest = () => {
    const newClassTest = {
      id: classTests.length + 1,
      label: `Class Test ${classTests.length + 1}`
    };
    setClassTests([...classTests, newClassTest]);
  };

  const handleDeleteExercise = (id) => {
    setExercises(exercises.filter(exercise => exercise.id !== id));
  };

  const handleDeleteHomework = (id) => {
    setHomeworks(homeworks.filter(exercise => exercise.id !== id));
  };

  const handleDeleteClassTest = (id) => {
    setClassTests(classTests.filter(exercise => exercise.id !== id));
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>
        Continuous Assessment Configuration
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            {/* <TextField label="Subject" variant="standard" fullWidth required /> */}
            <SelectMenu items={subjects} title={'Subject'}></SelectMenu>
          </Grid>
          <Grid item xs={12} sm={6}>
            <SelectMenu items={classes} title={'Class'}></SelectMenu>

          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Teacher" variant="standard" fullWidth required disabled />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Year" type="number" variant="standard" fullWidth required defaultValue={new Date().getFullYear()} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Term" type="number" variant="standard" fullWidth required />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Number on Roll" type="number" variant="standard" fullWidth required disabled />
          </Grid>


          <Grid item xs={12} sm={6}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Exercises
            </Typography>
          </Grid>

          {exercises.map((exercise) => (

            <Grid item xs={12} key={exercise.id} style={{ display: 'flex', alignItems: 'center' }}>
              <TextField
                label={"Exercise Assignment"}
                variant="standard"
                fullWidth
                required
                defaultValue={exercise.label}
              />
              <IconButton onClick={() => handleDeleteExercise(exercise.id)} color="secondary">
                <DeleteIcon />
              </IconButton>
            </Grid>
          ))}
          <Grid item xs={12}>
            <AddIconButton handleOnClick={handleAddExercise}></AddIconButton>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Homeworks
            </Typography>
          </Grid>
          {homeworks.map((homework) => (

            <Grid item xs={12} key={homework.id} style={{ display: 'flex', alignItems: 'center' }}>
              <TextField
                label={"Homework Assignment"}
                variant="standard"
                fullWidth
                required
                defaultValue={homework.label}
              />
              <IconButton onClick={() => handleDeleteHomework(homework.id)} color="secondary">
                <DeleteIcon />
              </IconButton>
            </Grid>
          ))}
          <Grid item xs={12}>
            <AddIconButton handleOnClick={handleAddHomework}></AddIconButton>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Class Tests
            </Typography>
          </Grid>
          {classTests.map((classTest) => (

            <Grid item xs={12} key={classTest.id} style={{ display: 'flex', alignItems: 'center' }}>
              <TextField
                label={"Class Test Assignment"}
                variant="standard"
                fullWidth
                required
                defaultValue={classTest.label}
              />
              <IconButton onClick={() => handleDeleteClassTest(classTest.id)} color="secondary">
                <DeleteIcon />
              </IconButton>
            </Grid>
          ))}

          <Grid item xs={12}>
            <AddIconButton handleOnClick={handleAddClassTest}></AddIconButton>
          </Grid>

          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Save
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default ContinuousAssessmentConfigurationForm;