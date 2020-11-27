import React from 'react';
import { Container } from '@material-ui/core';
import AppHeader from '../components/AppHeader';

const AppLayout: React.FC<{children: React.ReactNode}> = ({ children }) => (
  <Container>
    <AppHeader />
    { children }
  </Container>
);

export default AppLayout;