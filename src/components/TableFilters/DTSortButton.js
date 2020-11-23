import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeFilter } from '../../store/actions';
import Button from '@material-ui/core/Button';

const DTSortButton = () => {
  const [ reverse, setReverse ] = useState(false);
  const dispatch = useDispatch();

  const clickHandler = () => {
    setReverse(!reverse);
    dispatch(changeFilter({ reverse, sort: 'datetime' }));
  };

  return (
    <Button
      onClick={clickHandler}
      variant="outlined"
      size="small"
    >Дате {reverse? '↑':'↓'}</Button>
  );
};

export default DTSortButton;