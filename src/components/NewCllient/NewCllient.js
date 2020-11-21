import { useState } from 'react';
import Button from '@material-ui/core/Button'; 
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import api from '../../api';

const NewCllient = ({ selectHandler }) => {
  const [ open, setOpen ] = useState(false);
  const [ name, setName ] = useState(null);
  const [ phone, setPhone ] = useState(null);
  const [ saving, setSaving ] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setName(null);
    setPhone(null);
  };
  const hadleConfirm = () => {
    setSaving(true);
    api.clients.addNew({ name, phone })
      .then(result => {
        if (result || result === 0) {
          selectHandler(result);
          setOpen(false);
        }
      })
      .catch(e => {
        console.log(e);
      })
      .finally(() => {
        setSaving(false);
      });
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleOpen}>Добавить клиента</Button>
      {open &&
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle id="form-dialog-title">Новый клиент</DialogTitle>
        <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Имя / Название фирмы *"
              type="text"
              fullWidth
              value={name}
              onInput={e => setName(e.target.value)}
              autoComplete="false"
            />
            <TextField
              margin="dense"
              id="phone"
              name="phone"
              label="Контактный телефон *"
              type="tel"
              fullWidth
              value={phone}
              onInput={e => setPhone(e.target.value)}
              autoComplete="false"
            />
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Отмена
          </Button>
          {
            saving ? <Button color="primary" variant="contained" disabled={true}>Сохранение...</Button>:
            <Button color="primary" variant="contained" disabled={!(name&&phone)} onClick={hadleConfirm}>
              Добавить
            </Button>
          }
        </DialogActions>
      </Dialog>
      }
    </div>
  );
};

export default NewCllient;