import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Table from '@material-ui/core/Table';
import StaticLink from '@material-ui/core/Link';
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
import api from '../../api';
import { formatDateTime, formatPhoneNumber } from '../../utils';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const RequestsTable = () => {
  const classes = useStyles();
  const [ loading, setLoading ] = useState(true);
  const [ requests, setRequests ] = useState([]);

  const updateRequests = () => {
    api.requests.getAll()
    .then(data => {
      if (data && data.length && data.length >= 1) {
        setRequests(data);
      } else {
        setRequests([]);
      }
      setLoading(false);
    })
    .catch(err => {
      setRequests([]);
      setLoading(false);
      console.log('catch', err);
    });
  };
  
  useEffect(() => {
    updateRequests();
  }, []);

  const MyTable = () => {
    const rows = requests.map((row) => (
      <TableRow key={row.id}>
        <TableCell component="th" scope="row">{row.id}</TableCell>
        <TableCell align="left">{formatDateTime(row.datetime)}</TableCell>
        <TableCell align="left">{row.client}</TableCell>
        <TableCell align="left">{row.carrier}</TableCell>
        <TableCell align="left">{formatPhoneNumber(row.phone)}</TableCell>
        <TableCell align="left">
          <StaticLink href={`https://ati.su/firms/${row.code}/info`} target="_blank">{row.code}</StaticLink>
        </TableCell>
        <TableCell align="right">
          <IconButton aria-label="View" component={Link} to={`./info/${row.id}`}>
            <VisibilityIcon />
          </IconButton>
          <IconButton aria-label="Edit" color="primary" component={Link} to={`./edit/${row.id}`}>
            <EditIcon />
          </IconButton>
          <DeleteButton id={row.id}/>
        </TableCell>
      </TableRow>
    ));

    return requests && requests.length > 0 ? (
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
    ): <div>Нет заявок.</div>;
  };

  return loading ? <Loader /> : <MyTable/>;
};

export default RequestsTable;