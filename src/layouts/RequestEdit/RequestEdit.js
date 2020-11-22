import { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from  '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';
import { Link, useHistory, useParams } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import api from '../../api';
import ClientSelector from '../../components/ClientSelector';
import CarrierSelector from '../../components/CarrierSelector';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Loader from '../../components/Loader';
import DateTimeSelector from '../../components/DateTimeSelector';

const NewRequest = () => {
  const params = useParams();
  const [ loading, setLoading ] = useState(true);
  const [ requestId, setRequestId ] = useState(null);

  const [ datetime, setDatetime ] = useState(null);
  const [ client, setClient ] = useState(null);
  const [ clientName, setClientName ] = useState(null);
  const [ carrier, setCarrier ] = useState(null);
  const [ carrierName, setCarrierName ] = useState(null);
  const [ comments, setComments ] = useState('');
  const [ isSaving, setIsSaving ] = useState(false);
  const history = useHistory();

  useEffect(() => {
    (async()=>{
      setLoading(true);
      try {
        const responseData = await api.requests.getOne(parseInt(params.id));
        if (responseData && responseData.id) {
          setRequestId(responseData.id);
          setDatetime(responseData.datetime);
          setClient(responseData.client.id);
          setClientName(responseData.client.name);
          setCarrier(responseData.carrier.id);
          setCarrierName(responseData.carrier.name);
          setComments(responseData.comments);
        } else {
          console.log('нет такого id');
        }
      } catch (err) {
        console.log('нет такого id или ошибка получения данных с сервера');
        console.log(err);
      }
      setLoading(false);
    })();
  }, [params.id]);
  

  const handleCreateButton = async() => {
    setIsSaving(true);
    try {
      const responseData = await api.requests.editById(requestId, { datetime, client, carrier, comments });
      if (responseData && responseData.id) {
        console.log('заявка изменена');
      } else {
        console.log('ошибка изменения заявки');
      }
    } catch (err) {
      console.log('ошибка изменения заявки');
      console.log(err);
    }
    setIsSaving(false);
    history.push('/');
  }

  return loading ? <Loader />: (
    <>
    <Grid container spacing={3} direction="column">
      <Grid item>
        <Button component={Link} to="/" variant="outlined" size="small" startIcon={<KeyboardReturnIcon />}>Назад к списку заявок</Button>
      </Grid>
      <Grid item>
        <Typography variant="h4" component="h1">Редактирование заявки № {requestId}</Typography>
      </Grid>
    </Grid>
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <TableContainer>
          <Table aria-label="simple table">
            <TableBody>
              <TableRow>
                <TableCell>
                  <Typography variant="button">Дата и время создания</Typography>
                </TableCell>
                <TableCell>
                  <DateTimeSelector initValue={datetime} handler={(value) => setDatetime(value)} />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Typography variant="button">Фирма клиента</Typography>
                </TableCell>
                <TableCell>
                  <ClientSelector initID={client} initName={clientName} selectHandler={setClient} />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Typography variant="button">Перевозчик</Typography>
                </TableCell>
                <TableCell>
                  <CarrierSelector initID={carrier} initName={carrierName} selectHandler={setCarrier} />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Typography variant="button">Комментарий</Typography>
                </TableCell>
                <TableCell>
                  <TextField fullWidth
                    id="request-edit-comments"
                    label="Комментарии"
                    multiline
                    rows={5}
                    variant="outlined"
                    value={comments}
                    onInput={(e) => setComments(e.target.value)}
                  />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Grid item xs={12}>
        <Grid container justify="flex-end">
          {
            isSaving ?
              <Button variant="contained" color="primary" size="large" disabled>Сохранение...</Button> :
              <Button variant="contained" color="primary" size="large" onClick={handleCreateButton} disabled={!(client&&carrier&&datetime)}>Сохранить изменения</Button>
          }
        </Grid>
      </Grid>
    </Grid>
    </>
  );
};

export default NewRequest;