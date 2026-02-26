export default function DocentePage() {
  return (
    <main className="min-h-screen bg-white p-4">
      <section className="main-box p-6 mb-6 flex flex-col md:flex-row justify-between items-center">
        <div>
          <h1 className="main-title text-2xl">UTTehuacán SAIIUT 2.0 | Panel Docente</h1>
        </div>
        <div className="text-right">
          <div className="main-title text-lg">Pedro López Martínez</div>
        </div>
      </section>
      <section className="main-box p-4 mb-6">
        <label className="main-label mr-4">Seleccionar Grupo</label>
        <select className="main-input" aria-label="Seleccionar Grupo">
          <option>5°A Desarrollo de Software</option>
        </select>
        <button className="main-button ml-4 mt-2 md:mt-0">Imprimir Lista</button>
      </section>
      <section className="main-box p-4">
        <h2 className="main-title text-lg mb-4">Captura de Calificaciones</h2>
        <table className="w-full text-center">
          <thead>
            <tr>
              <th className="main-label">Matrícula</th>
              <th className="main-label">Nombre</th>
              <th className="main-label">Parcial 1</th>
              <th className="main-label">Parcial 2</th>
              <th className="main-label">Promedio</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>3523110569</td>
              <td>Carlos Hernandez Lopez</td>
              <td><input className="main-input w-12 text-center" defaultValue="8" aria-label="Parcial 1 - Carlos Hernandez Lopez" /></td>
              <td><input className="main-input w-12 text-center" defaultValue="9" aria-label="Parcial 2 - Carlos Hernandez Lopez" /></td>
              <td className="main-title">8.5</td>
            </tr>
            <tr>
              <td>3523110123</td>
              <td>Andrea Flores Castillo</td>
              <td><input className="main-input w-12 text-center" defaultValue="7" aria-label="Parcial 1 - Andrea Flores Castillo" /></td>
              <td><input className="main-input w-12 text-center" defaultValue="8" aria-label="Parcial 2 - Andrea Flores Castillo" /></td>
              <td className="main-title">7.5</td>
            </tr>
            <tr>
              <td>3523110863</td>
              <td>Valeria Ortiz Mendoza</td>
              <td><input className="main-input w-12 text-center" defaultValue="9" aria-label="Parcial 1 - Valeria Ortiz Mendoza" /></td>
              <td><input className="main-input w-12 text-center" defaultValue="9" aria-label="Parcial 2 - Valeria Ortiz Mendoza" /></td>
              <td className="main-title">9.0</td>
            </tr>
            <tr>
              <td>3523110632</td>
              <td>Miguel Alvarez Moreno</td>
              <td><input className="main-input w-12 text-center" defaultValue="6" aria-label="Parcial 1 - Miguel Alvarez Moreno" /></td>
              <td><input className="main-input w-12 text-center" defaultValue="7" aria-label="Parcial 2 - Miguel Alvarez Moreno" /></td>
              <td className="main-title">6.5</td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  );
}
