import { Link } from "react-router-dom";

export default function About() {
    return (
        <div className="p-6">
            <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center shadow-md">
                <h1 className="text-2xl font-bold">Emeyce</h1>
                <div className="space-x-6">
                <Link to="/" className="hover:text-gray-300 transition-colors duration-200">Inicio</Link>
                <Link to="/about" className="hover:text-gray-300 transition-colors duration-200">Acerca de</Link>
                <Link to="/contact" className="hover:text-gray-300 transition-colors duration-200">Contáctanos</Link>
                </div>
            </nav>
            <h1 className="text-3xl font-bold mb-4">Acerca del SGC</h1>
            <p className="mb-4">
                El Sistema de Gestión de Contenido es una plataforma web que
                organiza y centraliza información temática de forma clara
            </p>

            <h2 className="text-2xl font-semibold mb-2">Equipo de Desarrollo</h2>
            <ul className="list-disc list-inside">
                <li>Mariel Báez Sánchez</li>
                <li>Carlo Joseph Tamayo Tlapalamatl</li>
                <li>Jesús Francisco Trinidad Ramírez</li>
                <li>Sergio Galindo Flores</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-2">Misión</h2>
            <p className="mb-4">
                Crear una herramienta eficiente y moderna para consultar y gestionar
                contenido especializado.
            </p>

            <h2 className="text-2xl font-semibold mb-2">Visión</h2>
            <p className="mb-4">
                Ser un referente en soluciones web para el manejo estructurado de
                información.
            </p>

            <h2 className="text-2xl font-semibold mb-2">Valores</h2>
            <ul className="list-disc list-inside mb-6">
                <li>Innovación</li>
                <li>Colaboración</li>
                <li>Responsabilidad</li>
                <li>Accesibilidad</li>
            </ul>
        </div>
    );
}
