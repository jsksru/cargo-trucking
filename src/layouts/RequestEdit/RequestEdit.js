import { useParams } from 'react-router-dom';

const RequestEdit = () => {
  const params = useParams();
  return (
    <div>
      edit : {params.id}
    </div>
  );
};

export default RequestEdit;