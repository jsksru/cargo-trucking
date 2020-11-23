import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeFilter } from '../../store/actions';
import TextField from '@material-ui/core/TextField';

const SearchText = () => {
  const [ inputText, setInputText ] = useState('');
  const dispatch = useDispatch();

  const handleInput = (e) => {
    setInputText(e.target.value);

    if (e.target.value.trim() !== '' && e.target.value.trim().length > 1) {
      setTimeout(() => {
        dispatch(changeFilter({ search: inputText}));
      }, 1000);
    } else {
      setTimeout(() => {
        dispatch(changeFilter({ search: ''}));
      }, 1000);
    }

  };

  return (
    <TextField
      variant="outlined"
      label="Поиск в комментариях"
      id="comment-search"
      value={inputText}
      size="small"
      onInput={handleInput}
    />
  );
};

export default SearchText;