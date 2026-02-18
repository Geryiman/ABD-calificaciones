import '../styles-uttehuacan.css';

export default function Login() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 utteh-login-container">
      <h1 className="text-4xl utteh-title">UTTehuacán</h1>
      <h2 className="text-3xl utteh-section-title">SAIIUT 2.0</h2>

      <div className="utteh-card p-10 w-[420px] flex flex-col gap-6">
        <div>
          <label className="text-sm utteh-label">Matrícula</label>
          <input className="w-full mt-1 utteh-input" placeholder="Ingrese su matrícula" />
        </div>

        <div>
          <label className="text-sm utteh-label">Contraseña</label>
          <input type="password" className="w-full mt-1 utteh-input" placeholder="Ingrese su contraseña" />
        </div>

        <button className="mt-4 utteh-btn">
          INICIAR SESIÓN
        </button>
      </div>
    </div>
  );
}
