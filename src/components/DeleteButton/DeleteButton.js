import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteRequestAsync } from '../../store/actions';
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
  const isSaving = useSelector(state => state.saving);
  const dispatch = useDispatch();

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  const handleDelete = () => {
    dispatch(deleteRequestAsync(id, handleClose));
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