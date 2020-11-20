import { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import FilterInput from './FilterInput';
import FilterList from './FilteredList';

const SelectorWidget = ({ items, selectHandler }) => {

  const [ filteredItems, setFilteredItems ] = useState(items);

  const filterHandler = (value) => {
    if (value && value.length > 0) {
      setFilteredItems(items.filter(item => {
        const nameCondition = item.name.toLowerCase().trim().indexOf(value.toLowerCase().trim()) !== -1;
        const phoneCondition = item.phone.indexOf(value.toLowerCase().trim()) !== -1;
        return nameCondition || phoneCondition;
      }));
    } else {
      setFilteredItems(items);
    }
  };

  return (
    <Grid container spacing={3} direction="column">
      <Grid item>
        <FilterInput handler={filterHandler}/>
      </Grid>
      <Grid item>
        <FilterList items={filteredItems} selectHandler={selectHandler}/>
      </Grid>
    </Grid>
  )
};

export default SelectorWidget;