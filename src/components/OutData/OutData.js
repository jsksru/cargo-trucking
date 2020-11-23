import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100px',
  }
});

const OutData = () => {
  const classes = useStyles();

  return (
    <Paper>
      <div className={classes.root}>
        <Typography variant="body1">Нет подходящих записей</Typography>
      </div>
    </Paper>
  );
};

export default OutData;