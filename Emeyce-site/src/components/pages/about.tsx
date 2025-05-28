export default function About() {
    return (
        <div className="p-6">
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
