export default function Admin() {
  return (
    <div className="p-8 space-y-8">
      <h1 className="text-2xl text-[#008000]">Panel Administrador</h1>

      <div className="grid grid-cols-4 gap-6">
        {["Universidad","Alumnos Activos","Docentes Activos","Materias"].map((card,i)=>(
          <div key={i} className="glass p-6 text-center border-2 border-[#008000]">
            <p className="text-3xl text-[#008000] font-bold">{[1,50,65,37][i]}</p>
            <p>{card}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="glass p-6 h-48 border-2 border-[#008000]">Gráfica de rendimiento</div>
        <div className="glass p-6 h-48 border-2 border-[#008000]">Usuarios activos</div>
      </div>
    </div>
  );
}
