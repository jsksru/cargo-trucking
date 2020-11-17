import RequestsTable from '../../components/RequestsTable';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const Main = () => {
  return (
    <>
      <Grid container spacing={3} justify="space-between">
        <Grid item>
          <Typography variant="h4" component="h1">Список заявок</Typography>
        </Grid>
        <Grid item>
        <Button
          variant="contained"
          color="primary"
          size="large"
          startIcon={<AddIcon />}
        >
        Новая заявка
      </Button>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <RequestsTable />
        </Grid>
      </Grid>
    </>
  );
};

export default Main;