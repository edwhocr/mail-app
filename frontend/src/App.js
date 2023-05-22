import { Routes, Route } from 'react-router-dom';

import {Inicio} from './Pages/Home/Home';
import {Usuario1} from './Pages/Users/Usuario1';
import {Usuario2} from './Pages/Users/Usuario2';

function App() {
  return (
     <Routes>
      <Route path="/mail-app" element={<Inicio/>} />
      <Route path="/mail-app/usuario/1" element={<Usuario1/>} />
      <Route path="/mail-app/usuario/2" element={<Usuario2/>} />
      <Route path="*" element={<Inicio/>} />
     </Routes>

  );
}

export default App;


