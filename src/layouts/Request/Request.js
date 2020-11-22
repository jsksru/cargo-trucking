import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '../../api';
import Loader from '../../components/Loader';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';
import { formatDateTimeFull, formatPhoneNumber } from '../../utils';

const Request = () => {
  const params = useParams();
  const [ loading, setLoading ] = useState(true);
  const [ request, setRequest ] = useState({});

  useEffect(() => {
    (async()=>{
      setLoading(true);
      try {
        const responseData = await api.requests.getOne(parseInt(params.id));
        if (responseData && responseData.id) {
          setRequest(responseData);
        } else {
          console.log('нет такого id');
        }
      } catch (err) {
        console.log(err);
      }
      setLoading(false);
    })();
  }, [params.id]);

  return loading ? <Loader />: (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Button component={Link} to="/" variant="outlined" size="small" startIcon={<KeyboardReturnIcon />}>Назад к списку заявок</Button>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h2" component="h1" gutterBottom>Заявка № {request.id}</Typography>
      </Grid>
      <Grid item xs={12}>
        <TableContainer>
          <Table aria-label="simple table">
            <TableBody>
              <TableRow>
                <TableCell>
                  <Typography variant="button">Дата и время создания</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body1">{formatDateTimeFull(request.datetime)}</Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Typography variant="button">Фирма клиента</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body1" gutterBottom>{request.client.name}</Typography>
                  <Typography variant="body1">{formatPhoneNumber(request.client.phone)}</Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Typography variant="button">Перевозчик</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body1" gutterBottom>{request.carrier.name}</Typography>
                  <Typography variant="body1">{request.carrier.phone}</Typography>
                  <Button variant="outlined" size="small" color="primary" href={`https://ati.su/firms/${request.carrier.code}/info`} target="_blank">Код АТИ: {request.carrier.code}</Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Typography variant="button">Комментарий</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body1">{request.comments}</Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
};

export default Request;