import { Routes, Route } from 'react-router-dom';

import {Inicio} from './Pages/Home/Home';
import {Usuario1} from './Pages/Users/Usuario1';
import {Usuario2} from './Pages/Users/Usuario2';
import { NotFoundPage } from './Pages/Errors/404';

function App() {
  return (
     <Routes>
      <Route path="/" element={<Inicio/>} />
      <Route path="/usuario/1" element={<Usuario1/>} />
      <Route path="/usuario/2" element={<Usuario2/>} />
      <Route path="*" element={<NotFoundPage/>} />
     </Routes>

  );
}

export default App;


