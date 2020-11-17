import RequestsTable from '../../components/RequestsTable';
import Typography from '@material-ui/core/Typography';

const Main = () => {
  return (
    <div>
      <Typography variant="h4" component="h1">Список заявок</Typography>
      <RequestsTable />
    </div>
  );
};

export default Main;