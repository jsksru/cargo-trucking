import SelectorWidget from '../SelectorWidget';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import api from '../../api';
import { makeStyles } from '@material-ui/core/styles';
import FolderIcon from '@material-ui/icons/Folder';
import NewCarrier from '../NewCarrier';

const useStyles = makeStyles({
  bar: {
    display: 'flex',
    gap: '10px',
    flexDirection: 'row',
  },
  grow: {
    flexGrow: 1,
  }
});

const CarrierSelector = ({ initID, selectHandler }) => {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedID, setSelectedID] = useState(initID || null);
  const [selectedName, setSelectedName] = useState(null);
  const [confirmedName, setConfirmedName] = useState(null);
  const classes = useStyles();

  const confirmSelect = () => {
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
    (async()=>{
      setLoading(true);
      try {
        const responseData = await api.carriers.getAll();
        if (responseData && responseData.length && responseData.length > 0) {
          setItems(responseData);
          if (initID) {
            const initCarrier = responseData.find(item => item.id === initID);
            if (initCarrier) {
              setSelectedID(initCarrier.id);
              setSelectedName(initCarrier.name);
              setConfirmedName(initCarrier.name);
            }
          }
        }
      }
      catch (err) {
        console.log(err);
      }
      setLoading(false);
    })();
  }, [initID]);

  const widgetSelector = (id, name) => {
    setSelectedID(id);
    setSelectedName(name);
  };

  return loading ? <CircularProgress /> :
  (
    <>
      <div className={classes.bar}>
        <div className={classes.grow}>
          <TextField
            disabled
            id="carrier-selector-outlined-disabled"
            label="Перевозчик"
            defaultValue={confirmedName? confirmedName: 'Не выбран'}
            variant="outlined"
            size="small"
            fullWidth
          />
        </div>
        <Button variant="outlined" color="primary" onClick={handleClickOpen} startIcon={<FolderIcon/>}>Выбрать из базы</Button>
        <NewCarrier selectHandler={selectHandler}/>
      </div>
      {open &&
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>Выберите перевозчика</DialogTitle>
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
            <Button color="primary" variant="contained" disabled>Выберите перевозчика</Button>
          }
          
        </DialogActions>
      </Dialog>
      }
    </>
  );
};

export default CarrierSelector;