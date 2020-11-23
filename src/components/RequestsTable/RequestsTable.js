import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import RequestRow from './RequestRow';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const RequestsTable = ({ items }) => {
  const classes = useStyles();

  return (
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
          {items.map(item => <RequestRow row={item} key={item.id}/>)}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default RequestsTable;