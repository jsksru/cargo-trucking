import List from '@material-ui/core/List';
import FilteredItem from './FilteredItem';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minWidth: '400px',
    width: '100%',
    height: '240px',
    overflowY: 'auto',
  }
});

const FilteredList = ({ items, selectHandler }) => {
  const classes = useStyles();

  return (
    <List dense={true} className={classes.root}>
      {items.map(item => <FilteredItem name={item.name} phone={item.phone} id={item.id} key={item.id} selectHandler={selectHandler} />)}
    </List>
  )
};

export default FilteredList;