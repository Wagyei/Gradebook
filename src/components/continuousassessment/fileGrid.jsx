import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid, Container } from '@mui/material';
import BasicMenu from '../menus/basicMenu';
import FileCard from './fileCard';

const FileGrid = ({ files }) => (
  <Container>
    <Grid>
      <BasicMenu></BasicMenu>
      <p></p>

    </Grid>
    <Grid container spacing={3}>
      {Object.values(files).map(file => (
        <Grid item xs={12} sm={6} md={3} key={file.id}>
          <FileCard file={file} />
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default FileGrid;