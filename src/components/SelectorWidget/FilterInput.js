import TextField from '@material-ui/core/TextField';

const FilterInput = ({ handler }) => {

  const inputHandler = (e) => handler(e.target.value);

  return (
    <TextField id="widget-filter-input" label="Поиск..." variant="outlined" onInput={inputHandler} fullWidth autoComplete="false" />
  )
};

export default FilterInput;