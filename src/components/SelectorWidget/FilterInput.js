import { useState } from 'react';
import TextField from '@material-ui/core/TextField';

const FilterInput = ({ handle }) => {
  const [ filterText, setFilterText ] = useState('');
  
  const onInput = (e) => {
    setFilterText(e.target.value);
    handle(e.target.value);
  };

  return (
    <TextField id="outlined-basic" label="Фильтр" variant="outlined" fullWidth value={filterText} onInput={onInput}/>
  );
};

export default FilterInput;