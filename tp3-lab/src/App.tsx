import React, { useEffect, useState } from 'react';
import Instrumento from './components/instrumento';
import { InstrumentoType } from './components/types';


const App: React.FC = () => {
  const [instrumentos, setInstrumentos] = useState<InstrumentoType[]>([]);

  useEffect(() => {
    fetch('/instrumentos.json')
      .then(res => res.json())
      .then(data => setInstrumentos(data.instrumentos)); // OJO: tu JSON tiene clave "instrumentos"
  }, []);

  return (
    <div>
      {instrumentos.map((instrumento) => (
        <Instrumento key={instrumento.id} instrumento={instrumento} />
      ))}
    </div>
  );
};

export default App;
