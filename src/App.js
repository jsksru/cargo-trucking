import { Container, AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { createStyles, makeStyles } from '@material-ui/core/styles';

import Main from './layouts/Main';
import Request from './layouts/Request';
import NewRequest from './layouts/NewRequest';

function App() {
  const classes = useStyles();

  return (
    <Container>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>Грузоперевозки</Typography>
          <Button color="inherit">Выйти</Button>
        </Toolbar>
      </AppBar>
      <h1>App</h1>
      <Main />
      <Request />
      <NewRequest />
    </Container>
  );
}

export default App;

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);