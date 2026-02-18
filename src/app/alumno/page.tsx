import '../styles-uttehuacan.css';

export default function Alumno() {
  return (
    <div className="p-8 space-y-8 alumno-container">
      <div className="flex justify-between items-center utteh-card p-4">
        <h1 className="text-2xl utteh-title">SAIIUT 2.0</h1>
        <div className="text-right">
          <p className="font-bold">Dulce Acevedo Miguel</p>
          <p className="text-sm utteh-title">Matrícula: 3523110484</p>
        </div>
      </div>

      <div className="utteh-card p-6 w-72">
        <h2 className="text-lg utteh-section-title">Promedio general</h2>
        <p className="text-4xl utteh-title">9.1</p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {["Desarrollo Web Profesional","Matemáticas para Ingeniería","Administración de Bases de Datos","Seguridad en el Desarrollo","Inglés VII","Planeación y Organización"].map((mat,i)=>(
          <div key={i} className="utteh-card p-4 flex justify-between">
            <span>{mat}</span>
            <span className="utteh-title">8.{i}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
