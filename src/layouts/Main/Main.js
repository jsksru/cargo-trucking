import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import RequestsTable from '../../components/RequestsTable';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';
import Loader from '../../components/Loader';
import TableFilters from '../../components/TableFilters';
import OutData from '../../components/OutData';

import { loadRequestsAsync } from '../../store/actions';

const Main = () => {
  const loading = useSelector(state => state.loading);
  const requests = useSelector(state => state.requests);
  const filters = useSelector(state => state.filters);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRequestsAsync());
  }, [filters]);

  return (
    <>
      <Grid container spacing={3} justify="space-between">
        <Grid item>
          <Typography variant="h4" component="h1">Список заявок</Typography>
        </Grid>
        <Grid item>
          <Button
            component={Link}
            to="/new"
            variant="contained"
            color="primary"
            size="large"
            startIcon={<AddIcon />}
          >Новая заявка</Button>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TableFilters />
        </Grid>
        <Grid item xs={12}>
          {
            loading ? <Loader/> :
            requests && requests.length && requests.length > 0 ?
            <RequestsTable items={requests}/>:
            <OutData />
          }
        </Grid>
      </Grid>
    </>
  );
};

export default Main;