import { useState } from 'react';
import Button from '@material-ui/core/Button';
import DialogContentText from '@material-ui/core/DialogContentText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import api from '../../api';

const DeleteButton = ({ id }) => {
  const [open, setOpen] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  const handleDelete = () => {
    setIsSaving(true);
    api.requests.deleteById(id)
      .then(result => {
        if (result || result === 0) {
          console.log(`Заявка с id=${id} - удалена!`);
        } else {
          console.log(`Ошибка удаления заявки с id=${id} !`);
        }
      })
      .catch(e => {
        console.log(e);
      })
      .finally(() => {
        setIsSaving(false);
        window['__FORCE_TABLE_UPDATE']();
        handleClose();
      });
  };

  return (
    <>
      <IconButton aria-label="Delete" color="secondary" onClick={handleOpen}>
        <DeleteIcon />
      </IconButton>
      {open &&
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>Удаление заявки</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Вы точно хотите удалить заявку с номером {id} ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="default">Отмена</Button>
          {
            isSaving ?
              <Button color="secondary" disabled>Удаление...</Button> :
              <Button onClick={handleDelete} color="secondary" autoFocus>Удалить</Button>
          }
        </DialogActions>
      </Dialog>
      }
    </>
  );
};

export default DeleteButton;