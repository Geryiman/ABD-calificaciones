export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white">
      <section className="main-box p-8 w-full max-w-md">
        <h1 className="main-title text-3xl mb-2 text-center">UTTehuacán</h1>
        <h2 className="main-title text-xl mb-6 text-center">SAIIUT 2.0</h2>
        <form className="flex flex-col gap-4">
          <label className="main-label" htmlFor="matricula">Matrícula</label>
          <input className="main-input" id="matricula" type="text" placeholder="Ingrese su matrícula" />
          <label className="main-label" htmlFor="password">Contraseña</label>
          <input className="main-input" id="password" type="password" placeholder="Ingrese su contraseña" />
          <button className="main-button mt-4" type="submit">INICIAR SESIÓN</button>
        </form>
      </section>
    </main>
  );
}
