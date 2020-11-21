import SelectorWidget from '../SelectorWidget';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import api from '../../api';

const ClientSelector = ({ initID, initName, selectHandler }) => {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedID, setSelectedID] = useState(initID || null);
  const [selectedName, setSelectedName] = useState(initName || null);
  const [confirmedName, setConfirmedName] = useState(initName || null);

  const confirmSelect = (id) => {
    selectHandler(selectedID);
    setConfirmedName(selectedName);
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    if (!selectedID && !selectedName && !confirmedName) {
      setSelectedID(null);
      setSelectedName(null);
      setConfirmedName(null);
      selectHandler(null);
    }
    setOpen(false);
  };

  useEffect(() => {
    setLoading(true);
    api.clients.getAll()
      .then(data => {
        if (data && data.length && data.length > 0) {
          setItems(data);
        } else {
          setItems([]);
        }
      })
      .catch(e => {
        console.log(e);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const widgetSelector = (id, name) => {
    setSelectedID(id);
    setSelectedName(name);
  };

  return loading ? <CircularProgress /> :
  (
    <>
      <div>
        Клиент: {confirmedName? confirmedName: 'Не выбран'}
      </div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>Выбрать фирму клиента</Button>
      {open &&
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>Выберите фирму клиента</DialogTitle>
        <DialogContent style={{overflowY: 'hidden'}}>
          <SelectorWidget items={items} selectHandler={widgetSelector} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
            Отмена
          </Button>
          {
            selectedID ? 
            <Button onClick={confirmSelect} color="primary" variant="contained" disabled={!selectedID}>
            {`Выбрать ➝ ${selectedName}`}
            </Button>:
            <Button color="primary" variant="contained" disabled>Выберите клиента</Button>
          }
          
        </DialogActions>
      </Dialog>
      }
    </>
  );
};

export default ClientSelector;