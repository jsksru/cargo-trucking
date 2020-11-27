import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import RequestsTable from '../../components/RequestsTable';
import Loader from '../../components/presenters/Loader';
import OutData from '../../components/OutData';
import { loadRequestsAsync } from '../../store/actions';
import MainPageLayout from '../../layouts/MainPage';

const Main = () => {
  const loading = useSelector(state => state.loading);
  const requests = useSelector(state => state.requests);
  const filters = useSelector(state => state.filters);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRequestsAsync());
  }, [filters]);

  return (
    <MainPageLayout>
    {
      loading
      ? <Loader/>
      : requests && requests.length && requests.length > 0
      ? <RequestsTable items={requests}/>
      : <OutData />
    }
    </MainPageLayout>
  );
};

export default Main;