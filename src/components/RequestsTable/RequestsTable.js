import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import VisibilityIcon from '@material-ui/icons/Visibility';
import EditIcon from '@material-ui/icons/Edit';
import DeleteButton from '../DeleteButton';
import Loader from '../Loader';
import * as requestsApi from '../../api/requests';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const RequestsTable = () => {
  const classes = useStyles();
  const [ loading, setLoading ] = useState(false);
  const [ requests, setRequests ] = useState([]);

  useEffect(() => {
    setLoading(true);
    requestsApi.getAll()
    .then(data => {
      if (data && data.length && data.length >= 1) {
        setRequests(data);
      }
      setLoading(false);
    })
    .catch(err => {
      setLoading(false);
      console.log(err);
    });
  }, []);

  const MyTable = () => {
    const rows = requests.map((row) => (
      <TableRow key={row.id}>
        <TableCell component="th" scope="row">{row.number}</TableCell>
        <TableCell align="left">{row.datetime}</TableCell>
        <TableCell align="left">{row.client}</TableCell>
        <TableCell align="left">{row.carrier}</TableCell>
        <TableCell align="left">{row.carrierPhone}</TableCell>
        <TableCell align="left">{row.code}</TableCell>
        <TableCell align="right">
          <IconButton aria-label="View">
            <VisibilityIcon />
          </IconButton>
          <IconButton aria-label="Edit" color="primary">
            <EditIcon />
          </IconButton>
          <DeleteButton id={row.id}/>
        </TableCell>
      </TableRow>
    ));

    return(
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="Список заявок на перевозки">
          <TableHead>
            <TableRow>
              <TableCell>№</TableCell>
              <TableCell align="left">Дата/Время</TableCell>
              <TableCell align="left">Клиент</TableCell>
              <TableCell align="left">Перевозчик</TableCell>
              <TableCell align="left">Телефон перевозчика</TableCell>
              <TableCell align="left">АТИ</TableCell>
              <TableCell align="right">Действия</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };

  return loading ? <Loader /> : <MyTable/>;
};

export default RequestsTable;