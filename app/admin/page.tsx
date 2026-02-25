export default function AdminPage() {
  return (
    <main className="min-h-screen bg-white p-4">
      <section className="main-box p-6 mb-6">
        <h1 className="main-title text-2xl mb-2">Panel Administrador</h1>
      </section>
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="main-box p-4 flex flex-col items-center">
          <span className="main-title text-3xl">1</span>
          <span className="main-label">Universidad</span>
        </div>
        <div className="main-box p-4 flex flex-col items-center">
          <span className="main-title text-3xl">50</span>
          <span className="main-label">Alumnos Activos</span>
        </div>
        <div className="main-box p-4 flex flex-col items-center">
          <span className="main-title text-3xl">65</span>
          <span className="main-label">Docentes Activos</span>
        </div>
        <div className="main-box p-4 flex flex-col items-center">
          <span className="main-title text-3xl">37</span>
          <span className="main-label">Materias</span>
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="main-box p-4 h-40">Gráfica de rendimiento</div>
        <div className="main-box p-4 h-40">Usuarios activos</div>
      </section>
    </main>
  );
}
