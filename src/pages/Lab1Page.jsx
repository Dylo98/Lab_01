import { data } from '../data/module-data';
import PersonProfile from '../components/PersonProfile';
function Lab1Page() {
  return (
    <>
      <div className="container mt-4">
        <h1 className="text-center mb-4">Laboratorium 1</h1>
        <div className="row">
          {data.map(person => {
            return (
              <div key={person.id} className="col-md-16 mb-4">
                <PersonProfile person={person} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Lab1Page;
