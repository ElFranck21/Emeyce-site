import { Link } from 'react-router-dom';
import "../style.css";

function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center shadow-md">
        <h1 className="text-2xl font-bold">Emeyce</h1>
        <div className="space-x-6">
          <Link to="/" className="hover:text-gray-300 transition-colors duration-200">Inicio</Link>
          <Link to="/acerca-de" className="hover:text-gray-300 transition-colors duration-200">Acerca de</Link>
          <Link to="/contacto" className="hover:text-gray-300 transition-colors duration-200">Contáctanos</Link>
        </div>
      </nav>
      <main className="p-8 text-center">
        <h2 className="text-3xl font-semibold mb-4">Bienvenido a una app de prueba</h2>
        <p className="text-lg text-gray-700">
          Continuara...
        </p>
      </main>
    </div>
  );
}

export default Home;
