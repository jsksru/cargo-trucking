import { Link } from 'react-router-dom';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import StaticLink from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';
import VisibilityIcon from '@material-ui/icons/Visibility';
import EditIcon from '@material-ui/icons/Edit';
import DeleteButton from '../DeleteButton';
import { formatDateTime, formatPhoneNumber } from '../../utils';

const RequestRow = ({ row }) => {
  return (
    <TableRow>
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
  );
};

export default RequestRow;