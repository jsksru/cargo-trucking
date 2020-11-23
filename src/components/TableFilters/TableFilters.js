import IDSortButton from './IDSortButton';
import DTSortButton from './DTSortButton';
import SearchText from './SearchText';
import Typography from '@material-ui/core/Typography';

const TableFilters = () => {
  return (
    <div>
      <div style={{marginBottom: '10px'}}>
        <Typography variant="button">Сортировать по:</Typography><br/>
        <IDSortButton/>
        <span> </span>
        <DTSortButton/>
      </div>
      <div>
        <Typography variant="button">Поиск в комментариях:</Typography><br/>
        <SearchText/>
      </div>
    </div>
  )
};

export default TableFilters;