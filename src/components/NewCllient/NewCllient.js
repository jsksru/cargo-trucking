import { useState } from 'react';
import Button from '@material-ui/core/Button'; 
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import AddIcon from '@material-ui/icons/Add';
import api from '../../api';
import { useFormik } from 'formik';
import * as yup from 'yup';

const NewCllient = ({ selectHandler }) => {
  const [ open, setOpen ] = useState(false);
  const [ saving, setSaving ] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const hadleConfirm = async(values) => {
    setSaving(true);
    try {
      const responseData = await api.clients.addNew({...values});
      if (responseData && responseData.data && responseData.data.id) {
        selectHandler(responseData.data.id)
      }
    }
    catch(err) {
      console.log(err);
    }
    setOpen(false);
  };

  const validationSchema = yup.object({
    name: yup
      .string('Имя \\ Фирма клиента')
      .required('Это поле обязательное')
      .min(3, 'Минимум 3 символа')
      .max(50, 'Максимум 50 символов'),
    phone: yup
      .string('Телефон')
      .required('Это поле обязательное')
      .length(10, '10 цифр')
      .matches(/\d{10}/, {excludeEmptyString: true, message: 'Только цифры (прим. 9001234567)'})
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
    },
    validationSchema,
    onSubmit: values => hadleConfirm(values),
  });

  return (
    <>
      <Button variant="outlined" color="primary" onClick={handleOpen} startIcon={<AddIcon/>}>Добавить</Button>
      {open &&
      <Dialog open={open} onClose={handleClose}>
        <form onSubmit={formik.handleSubmit}>
          <DialogTitle id="form-dialog-title">Новый клиент</DialogTitle>
          <DialogContent>
            
              <TextField
                autoComplete="false"
                autoFocus
                margin="dense"
                id="name"
                label="Имя / Название фирмы *"
                fullWidth
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.name && !!formik.errors.name}
                helperText={formik.touched.name && formik.errors.name}
              />
              <TextField
                autoComplete="false"
                margin="dense"
                id="phone"
                name="phone"
                label="Контактный телефон *"
                fullWidth
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.phone && !!formik.errors.phone}
                helperText={formik.touched.phone && formik.errors.phone}
              />

          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Отмена
            </Button>
            {
              saving ? <Button color="primary" variant="contained" disabled={true}>Сохранение...</Button>:
              <Button color="primary" variant="contained" type="submit">
                Добавить
              </Button>
            }
          </DialogActions>
        </form>
      </Dialog>
      }
    </>
  );
};

export default NewCllient;