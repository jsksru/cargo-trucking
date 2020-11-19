import { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import CircularProgress from '@material-ui/core/CircularProgress';
import SelectorWidger from '../SelectorWidget';
import * as clientsApi from '../../api/clients';

const ClientSelector = () => {
  const [ open, setOpen ] = useState(false);
  const [ isLoading, setIsLoading ] = useState(true);
  const [ items, setItems ] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    clientsApi.getAll()
      .then(data => {
        if (data && data.length && data.length > 0) {
          setItems(data);
        }
      })
      .catch(e => {
        console.log(e);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return isLoading ? <CircularProgress /> : (
    <>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Выбрать клиента
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Выберите фирму клиента</DialogTitle>
        <DialogContent>
          <SelectorWidger items={items}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} size="medium">
            Отмена
          </Button>
          <Button onClick={handleClose} variant="contained" color="primary" size="medium">
            Выбрать
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default ClientSelector;