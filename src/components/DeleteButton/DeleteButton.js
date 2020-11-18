import { useState } from 'react';
import Button from '@material-ui/core/Button';
import DialogContentText from '@material-ui/core/DialogContentText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const DeleteButton = ({ id }) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  const handleDelete = () => {
    console.log(`Заявка с номером ${id} удалена !`);
  };

  return (
    <>
      <IconButton aria-label="Delete" color="secondary" onClick={handleOpen}>
        <DeleteIcon />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Удаление заявки</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Вы точно хотите удалить заявку с номером {id} ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="default">Отмена</Button>
          <Button onClick={handleDelete} color="secondary" autoFocus>Удалить</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DeleteButton;