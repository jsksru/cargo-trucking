import { useState, useEffect } from 'react';
import RequestsTable from '../../components/RequestsTable';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';
import Loader from '../../components/Loader';
import api from '../../api';

const Main = () => {
  const [ loading, setLoading ] = useState(true);
  const [ requests, setRequests ] = useState([]);
  const [ sortField, setSortField ] = useState('id');
  const [ sortReverse, setSortReverse ] = useState(false);
  const [ search, setSearch ] = useState('');
  const [ searchView, setSearchView ] = useState('');

  const updateRequests = async() => {
    setLoading(true);
    try {
      const dataFromServer = await api.requests.getAll({
        sort: sortField,
        reverse: sortReverse,
        search: search || null,
      });
      if (dataFromServer) setRequests(dataFromServer);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };
  window['__FORCE_TABLE_UPDATE'] = updateRequests;

  useEffect(() => {
    updateRequests();
  }, [sortField, sortReverse, search]);

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
        >
        Новая заявка
      </Button>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Button
            onClick={()=>{
              setSortField('id');
              setSortReverse(!sortReverse);
            }}
            variant="contained"
            size="small"
          >Сортировка по id {sortReverse? '↑':'↓'}</Button>
          <Button
            onClick={()=>{
            setSortField('datetime');
            setSortReverse(!sortReverse);
            }}
            variant="contained"
            size="small"
          >Сортировка по Дате и времени {sortReverse? '↑':'↓'}</Button>
          <TextField
            variant="outlined"
            label="Поиск в комментариях"
            id="comment-search"
            value={searchView}
            size="small"
            onInput={(e)=>{
              setSearchView(e.target.value);
              setTimeout(()=>{
                if (searchView.trim().length > 1) {
                  setSearch(searchView);
                } else {
                  setSearch('');
                }
              }, 1000);
            }}
          />
        </Grid>
        <Grid item xs={12}>
          {
            loading ? <Loader/> :
            requests && requests.length && requests.length > 0 ?
            <RequestsTable items={requests}/>:
            <div>Нет данных!</div>
          }
        </Grid>
      </Grid>
    </>
  );
};

export default Main;