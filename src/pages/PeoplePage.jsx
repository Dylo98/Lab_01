import { useParams } from 'react-router-dom';
import { data } from '../data/module-data';

function PeoplePage() {
  const { id } = useParams();
  console.log(id);

  return (
    <>
      <h1>Szukane imie</h1>
      <p>{data.at(id) ? data.at(id) : <span>Brak takiego imienia</span>}</p>
    </>
  );
}
export default PeoplePage;
