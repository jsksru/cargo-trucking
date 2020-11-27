import React from 'react';
import AppLayout from './AppLayout';
import Grid from '@material-ui/core/Grid';
import Typography from  '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';
import { Link } from 'react-router-dom';

const PageLayout: React.FC<{children: React.ReactNode, title: string}> = ({ children, title }) => (
  <AppLayout>
    <Grid container spacing={3} direction="column">
      <Grid item>
        <Button component={Link} to="/" variant="outlined" size="small" startIcon={<KeyboardReturnIcon />}>Назад к списку заявок</Button>
      </Grid>
      <Grid item>
        <Typography variant="h4" component="h1" gutterBottom>{ title }</Typography>
      </Grid>
    </Grid>
    { children }
  </AppLayout>
);

export default PageLayout;