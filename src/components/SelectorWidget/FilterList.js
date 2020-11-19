import List from '@material-ui/core/List';
import FilterItem from './FilterItem';

const FilterList = ({ items }) => {
  return (
    <List dense={true}>
      {items && items.length > 0 && items.map(item => <FilterItem name={item.name} phone={item.phone} id={item.id} />)}
    </List>
  );
};

export default FilterList;