import 'bootstrap/dist/css/bootstrap.css';
// import { data } from './data/module-data';
import RootLayout from './layouts/RootLayout';
import { Route, Routes } from 'react-router-dom';
import Lab1Page from './pages/Lab1Page';
import PeoplePage from './pages/PeoplePage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <RootLayout>
      <Routes>
        <Route path="/lab1" element={<Lab1Page />} />
        <Route path="/lab2" element={<h1>Laboratorium2</h1>} />
        <Route path="/people/:id" element={<PeoplePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </RootLayout>
  );
}

export default App;
