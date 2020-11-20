import { useParams } from 'react-router-dom';

const Request = () => {
  const params = useParams();
  return (
    <div>
      info : {params.id}
    </div>
  );
};

export default Request;