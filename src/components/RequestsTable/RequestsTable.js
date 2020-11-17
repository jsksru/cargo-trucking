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
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(id, number, datetime, client, carrier, carrierPhone, code) {
  return { id, number, datetime, client, carrier, carrierPhone, code };
}

const rows = [
  createData(101, 'A01', '03.02.2020 11:32', 'ООО "Альфа"', 'Алексеев В.Е.', '+7(900)12-34-567', '174899'),
  createData(232, 'A02', '12.11.2020 12:32', 'ЗАО "Сатурн"', 'Алексеев В.Е.', '+7(900)12-34-567', '174899'),
  createData(343, 'T19', '11.05.2020 5:00', 'ИП Иванов И.И.', 'Алексеев В.Е.', '+7(900)12-34-567', '174899'),
  createData(104, 'Ю77', '28.10.2020 9:05', 'STERN', 'Алексеев В.Е.', '+7(900)12-34-567', '174899'),
];

const RequestsTable = () => {
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
          {rows.map((row) => (
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
                <IconButton aria-label="Delete" color="secondary">
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default RequestsTable;