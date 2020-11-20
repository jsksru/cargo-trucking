import { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from  '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';
import { Link, useHistory } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import api from '../../api';
import ClientSelector from '../../components/ClientSelector';
import CarrierSelector from '../../components/CarrierSelector';

const NewRequest = () => {
  const [ client, setClient ] = useState(null);
  const [ carrier, setCarrier ] = useState(null);
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
        <ClientSelector selectHandler={setClient} />
      </Grid>
      <Grid item lg={6} xs={12}>
        <CarrierSelector selectHandler={setCarrier} />
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
              <Button variant="contained" color="primary" size="large" onClick={handleCreateButton} disabled={!(client&&carrier)}>Создать заявку</Button>
          }
        </Grid>
      </Grid>
    </Grid>
    </>
  );
};

export default NewRequest;