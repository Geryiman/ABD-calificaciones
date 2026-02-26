export default function AlumnoPage() {
  return (
    <main className="min-h-screen bg-white p-4">
      <section className="main-box p-6 mb-6 flex flex-col md:flex-row justify-between items-center">
        <div>
          <h1 className="main-title text-2xl">SAIIUT 2.0</h1>
        </div>
        <div className="text-right">
          <div className="main-title text-lg">Dulce Acevedo Miguel</div>
          <div className="main-label">Matrícula: 3523110484</div>
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="main-box p-4 flex flex-col items-center">
          <span className="main-label">Promedio general</span>
          <span className="main-title text-4xl">9.1</span>
        </div>
        <div className="flex flex-col gap-2">
          <div className="main-box p-3 flex justify-between items-center">
            <span>Desarrollo Web Profesional</span>
            <span className="main-title">8.0</span>
          </div>
          <div className="main-box p-3 flex justify-between items-center">
            <span>Administración de Bases de Datos</span>
            <span className="main-title">8.2</span>
          </div>
          <div className="main-box p-3 flex justify-between items-center">
            <span>Inglés VII</span>
            <span className="main-title">8.4</span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="main-box p-3 flex justify-between items-center">
            <span>Matemáticas para Ingeniería</span>
            <span className="main-title">8.1</span>
          </div>
          <div className="main-box p-3 flex justify-between items-center">
            <span>Seguridad en el Desarrollo</span>
            <span className="main-title">8.3</span>
          </div>
          <div className="main-box p-3 flex justify-between items-center">
            <span>Planeación y Organización</span>
            <span className="main-title">8.5</span>
          </div>
        </div>
      </section>
    </main>
  );
}
