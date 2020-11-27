import { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from  '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import api from '../../api';
import ClientSelector from '../../components/ClientSelector';
import CarrierSelector from '../../components/CarrierSelector';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import PageLayout from '../../layouts/PageLayout';

const NewRequest = () => {
  const [ client, setClient ] = useState(null);
  const [ carrier, setCarrier ] = useState(null);
  const [ comments, setComments ] = useState('');
  const [ isSaving, setIsSaving ] = useState(false);
  const history = useHistory();

  const handleCreateButton = async() => {
    setIsSaving(true);
    try {
      const responseData = await api.requests.addNew({ client, carrier, comments });
      if (responseData && responseData.newLength) {
        console.log('Заявка добавлена');
      } else {
        console.log('Ошибка добавления заявки');
      }
    }
    catch (err) {
      console.log(err);
    }
    setIsSaving(false);
    history.push('/')
  }

  return (
    <PageLayout title="Новая заявка">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TableContainer>
            <Table aria-label="simple table">
              <TableBody>
                <TableRow>
                  <TableCell>
                    <Typography variant="button">Фирма клиента</Typography>
                  </TableCell>
                  <TableCell>
                    <ClientSelector initID={client} selectHandler={setClient} />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography variant="button">Перевозчик</Typography>
                  </TableCell>
                  <TableCell>
                    <CarrierSelector initID={carrier} selectHandler={setCarrier} />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography variant="button">Комментарий</Typography>
                  </TableCell>
                  <TableCell>
                    <TextField fullWidth
                      id="new-request-comments"
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
                <Button variant="contained" color="primary" size="large" onClick={handleCreateButton} disabled={!(client&&carrier)}>Создать заявку</Button>
            }
          </Grid>
        </Grid>
      </Grid>
    </PageLayout>
  );
};

export default NewRequest;