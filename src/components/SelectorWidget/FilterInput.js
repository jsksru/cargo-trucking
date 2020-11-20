import TextField from '@material-ui/core/TextField';
import { generateRandomForTextFieldIDs } from '../../utils';

const FilterInput = ({ handler }) => {

  const inputHandler = (e) => handler(e.target.value);

  return (
    <TextField id={`text-field-${generateRandomForTextFieldIDs()}`} label="Поиск..." variant="outlined" onInput={inputHandler} fullWidth autoComplete="false" />
  )
};

export default FilterInput;