import { data } from '../data/module-data';
function Lab1Page() {
  return (
    <>
      <div className="container mt-4">
        <h1 className="text-center mb-4">Laboratorium 1</h1>
        <div className="row">
          {data.map(person => {
            return (
              <div key={person.id} className="col-md-16 mb-4">
                <div className="card h-100">
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{person.name}</h5>
                    <p className="card-text">Birthday: {person.birth}</p>
                    <p className="card-text">Eyes: {person.eyes}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Lab1Page;
