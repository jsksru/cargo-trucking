import { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from  '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import api from '../../api';
import { useHistory } from 'react-router-dom';

const NewRequest = () => {
  const [ client, setClient ] = useState('');
  const [ carrier, setCarrier ] = useState('');
  const [ carrierPhone, setCarrierPhone ] = useState('');
  const [ carrierCode, setCarrierCode ] = useState('');
  const [ comments, setComments ] = useState('');
  const [ isSaving, setIsSaving ] = useState(false);
  const history = useHistory();

  const handleCreateButton = () => {
    setIsSaving(true);
      api.requests.addNew({
      client,
      carrier,
      comments,
    }).then(id => {
      if (id) {
        setIsSaving(false);
        history.push('/');
      }
    }).catch(err => {
      console.log(err);
    });
  }

  return (
    <>
    <Grid container spacing={3} direction="column">
      <Grid item>
      <Button component={Link} to="/" variant="outlined" size="small" startIcon={<KeyboardReturnIcon />}>Назад к списку заявок</Button>
      </Grid>
      <Grid item>
        <Typography variant="h4" component="h1">Новая заявка</Typography>
      </Grid>
    </Grid>
    <Grid container spacing={3}>
      <Grid item lg={6} xs={12}>
        <TextField
          id="client-field"
          label="Фирма клиента"
          variant="outlined"
          value={client}
          onInput={(e) => setClient(e.target.value)}
        />
      </Grid>
      <Grid item lg={6} xs={12}>
        <TextField
          id="carrier-field"
          label="Перевезчик"
          variant="outlined"
          value={carrier}
          onInput={(e) => setCarrier(e.target.value)}
        />
        <TextField
          id="carrier-phone-field"
          label="Телефон перевозчика"
          variant="outlined"
          value={carrierPhone}
          onInput={(e) => setCarrierPhone(e.target.value)}
        />
        <TextField
          id="carrier-code"
          label="Код АТИ перевозчика"
          variant="outlined"
          value={carrierCode}
          onInput={(e) => setCarrierCode(e.target.value)}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField fullWidth
          id="outlined-multiline-static"
          label="Комментарии"
          multiline
          rows={5}
          variant="outlined"
          value={comments}
          onInput={(e) => setComments(e.target.value)}
        />
      </Grid>
      <Grid item xs={12}>
        <Grid container justify="flex-end">
          {
            isSaving ?
              <Button variant="contained" color="primary" size="large" disabled>Сохранение...</Button> :
              <Button variant="contained" color="primary" size="large" onClick={handleCreateButton}>Создать заявку</Button>
          }
        </Grid>
      </Grid>
    </Grid>
    </>
  );
};

export default NewRequest;