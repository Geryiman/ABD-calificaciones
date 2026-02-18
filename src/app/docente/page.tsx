"use client"
import { useState } from "react"
import '../styles-uttehuacan.css';

/* Inline styles converted to classes */
const styles = `
  .docente-main {
    background: var(--utteh-light);
    min-height: 100vh;
    padding: 40px;
  }

  .utteh-header {
    margin-bottom: 24px;
    padding: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .utteh-header .utteh-title {
    font-size: 28px;
  }

  .utteh-group-selector {
    margin-bottom: 24px;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .utteh-select-group {
    margin-left: 12px;
  }

  .utteh-grades-card {
    padding: 20px;
  }

  .utteh-section-title-mb {
    margin-bottom: 16px;
  }
`;

export default function DocentePage() {
  const [grupo, setGrupo] = useState("5°A Desarrollo de Software")
  const alumnos = [
    { matricula: "3523110569", nombre: "Carlos Hernandez Lopez", p1: 8, p2: 9 },
    { matricula: "3523110123", nombre: "Andrea Flores Castillo", p1: 7, p2: 8 },
    { matricula: "3523110863", nombre: "Valeria Ortiz Mendoza", p1: 9, p2: 9 },
    { matricula: "3523110632", nombre: "Miguel Alvarez Moreno", p1: 6, p2: 7 }
  ]

  const imprimirLista = () => {
    window.print()
  }

  const getGradeClass = (value:number) => {
    if (value >= 9) return "grade-input grade-high"
    if (value >= 7) return "grade-input grade-mid"
    return "grade-input grade-low"
  }

  return (
    <main className="docente-main">

      {/* ENCABEZADO */}
      <header className="utteh-card utteh-header">
        <h1 className="utteh-title">UTTehuacán SAIIUT 2.0 | Panel Docente</h1>
        <div className="utteh-label">Pedro López Martínez</div>
      </header>

      {/* SELECCIÓN DE GRUPO */}
      <div className="utteh-card utteh-group-selector">
        <div>
          <label className="utteh-label">Seleccionar Grupo</label>
          <select
            className="utteh-input utteh-select-group"
            value={grupo}
            onChange={(e)=>setGrupo(e.target.value)}
            title="Seleccionar Grupo"
          >
            <option>5°A Desarrollo de Software</option>
            <option>4°B TI</option>
            <option>3°C Redes</option>
          </select>
        </div>

        <button onClick={imprimirLista} className="utteh-btn">
          Imprimir Lista
        </button>
      </div>

      {/* TABLA DE CALIFICACIONES */}
      <div className="utteh-card utteh-grades-card">
        <h2 className="utteh-section-title utteh-section-title-mb">Captura de Calificaciones</h2>

        <table className="utteh-table w-full">
          <thead>
            <tr>
              <th>Matrícula</th>
              <th>Nombre</th>
              <th>Parcial 1</th>
              <th>Parcial 2</th>
              <th>Promedio</th>
            </tr>
          </thead>
          <tbody>
            {alumnos.map((a, i) => {
              const promedio = ((a.p1 + a.p2) / 2).toFixed(1)
              return (
                <tr key={i}>
                  <td>{a.matricula}</td>
                  <td>{a.nombre}</td>

                  <td>
                    <input 
                      type="number" 
                      defaultValue={a.p1} 
                      className={getGradeClass(a.p1)} 
                      title={`Calificación de ${a.nombre} en el Parcial 1`} 
                      placeholder="Ingrese calificación" 
                    />
                  </td>

                  <td>
                    <input 
                      type="number" 
                      defaultValue={a.p2} 
                      className={getGradeClass(a.p2)} 
                      title={`Calificación de ${a.nombre} en el Parcial 2`} 
                      placeholder="Ingrese calificación" 
                    />
                  </td>

                  <td className={getGradeClass(Number(promedio))}>{promedio}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
        {/* FORMATO OFICIAL PARA IMPRESIÓN */}
        <div className="print-only hoja-oficial">
          {/* Encabezado */}
          <h2 className="escuela">UNIVERSIDAD TECNOLÓGICA DE TEHUACÁN</h2>
          <h3 className="reporte">REPORTE DE EVALUACIONES PARCIALES</h3>

          {/* Información del docente */}
          <div className="info-docente">
            <p><strong>Nombre del Maestro:</strong> Pedro López Martínez</p>
            <p><strong>Materia:</strong> Desarrollo Web Profesional</p>
            <p><strong>Periodo:</strong> Enero - Abril 2026</p>
            <p><strong>Grupo:</strong> {grupo}</p>
          </div>

          {/* Tabla de calificaciones */}
          <table className="tabla-impresion">
            <thead>
              <tr>
                <th>No.</th>
                <th>Matrícula</th>
                <th>Nombre del Alumno</th>
                <th>Parcial 1</th>
                <th>Parcial 2</th>
                <th>Promedio</th>
              </tr>
            </thead>
            <tbody>
              {alumnos.map((a, i) => {
                const promedio = ((a.p1 + a.p2) / 2).toFixed(1)
                return (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{a.matricula}</td>
                    <td>{a.nombre}</td>
                    <td>{a.p1}</td>
                    <td>{a.p2}</td>
                    <td>{promedio}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>

          {/* Firma del docente */}
          <div className="firma">
            <p>__________________________________________</p>
            <p>Firma del Docente</p>
          </div>
        </div>
      </div>
    </main>
  )
}
