import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeFilter } from '../../store/actions';
import Button from '@material-ui/core/Button';

const IDSortButton = () => {
  const [ reverse, setReverse ] = useState(true);
  const dispatch = useDispatch();

  const clickHandler = () => {
    setReverse(!reverse);
    dispatch(changeFilter({ reverse, sort: 'id' }));
  };

  return (
    <Button
      onClick={clickHandler}
      variant="outlined"
      size="small"
    >ID {reverse? '↑':'↓'}</Button>
  );
};

export default IDSortButton;