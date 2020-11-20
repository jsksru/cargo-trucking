import PersonIcon from '@material-ui/icons/Person';
import DeleteIcon from '@material-ui/icons/Delete';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';

const FilteredItem = ({ name, phone, id, selectHandler}) => {

  return (
    <ListItem button onClick={() => selectHandler(id, name)}>
      <ListItemIcon>
        <PersonIcon />
      </ListItemIcon>
      <ListItemText
        primary={name}
        secondary={phone ? phone : null}
      />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="delete" color="secondary">
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
};

export default FilteredItem;