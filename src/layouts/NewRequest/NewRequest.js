import Grid from '@material-ui/core/Grid';
import Typography from  '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';
import AddIcon from '@material-ui/icons/Add';
import FolderIcon from '@material-ui/icons/Folder';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const NewRequest = () => {
  const classes = useStyles();

  return (
    <>
    <Grid container spacing={3} direction="column">
      <Grid item>
      <Button component={Link} to="/" variant="contained" size="small" startIcon={<KeyboardReturnIcon />}>Назад к списку заявок</Button>
      </Grid>
      <Grid item>
        <Typography variant="h4" component="h1">Новая заявка</Typography>
      </Grid>
    </Grid>
    <Grid container spacing={3}>
      <Grid item lg={6} xs={12}>
        <div>Клиент:</div>
        <div className={classes.root}>
          <Button variant="contained" startIcon={<FolderIcon />}>Выбрать из базы</Button>
          <Button variant="contained" startIcon={<AddIcon />}>Новый</Button>
        </div>
      </Grid>
      <Grid item lg={6} xs={12}>
        <div>Перевозчик:</div>
        <div className={classes.root}>
          <Button variant="contained" startIcon={<FolderIcon />}>Выбрать из базы</Button>
          <Button variant="contained" startIcon={<AddIcon />}>Новый</Button>
        </div>
      </Grid>
      <Grid item xs={12}>
        <TextField fullWidth
          id="outlined-multiline-static"
          label="Комментарии"
          multiline
          rows={5}
          defaultValue="Default Value"
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12}>
        <Grid container justify="flex-end">
          <Button variant="contained" color="primary" size="large">Создать заявку</Button>
        </Grid>
      </Grid>
    </Grid>
    </>
  );
};

export default NewRequest;