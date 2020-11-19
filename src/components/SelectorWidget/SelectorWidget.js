import { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import FilterInput from './FilterInput';
import FilterList from './FilterList';

const SelectorWidget = ({ items }) => {
  const [ filteredItems, setFilteredItems ] = useState(items);

  const filter = (value) => {
    if (value && value.length && value.length > 0) {
      setFilteredItems(filteredItems.filter(item => {
        const nameCondition = item.name.toLowerCase().indexOf(value.toLowerCase().trim()) !== -1;
        const phoneCondition = item.phone.indexOf(value.trim()) !== -1;
        return nameCondition || phoneCondition;
      }));
    } else {
      setFilteredItems(items);
    }
    
  };

  return (
    <Grid container direction="column" spacing={3}>
      <Grid item>
        <FilterInput handle={filter} />
      </Grid>
      <Grid item>
        <FilterList items={filteredItems} />
      </Grid>
    </Grid>
  );
};

export default SelectorWidget;