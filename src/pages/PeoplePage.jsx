import { useParams } from 'react-router-dom';
import { data } from '../data/module-data';

function PeoplePage() {
  const { id } = useParams();
  console.log(id);
  const person = data.at(id);

  if (!person) {
    return (
      <div className="container mt-5">
        <div className="alert alert-danger text-center" role="alert">
          Nie znaleziono osoby o podanym ID
        </div>
      </div>
    );
  }

  return (
    <>
      <h1>Szukane imie</h1>
      <div className="container mt-4">
        <div className="card">
          <div className="card-header text-center">
            <h2>{person.name}</h2>
          </div>
          <div className="card-body">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <strong>Imię:</strong> {person.name}
              </li>
              <li className="list-group-item">
                <strong>Kolor oczu:</strong> {person.eyes}
              </li>
              <li className="list-group-item">
                <strong>Data urodzenia:</strong> {person.birth}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
export default PeoplePage;
