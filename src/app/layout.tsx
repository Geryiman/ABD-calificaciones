import "./globals.css";

export const metadata = {
  title: "SAIIUT UTTehuacán",
  description: "Sistema académico web",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="antialiased bg-[#050505] text-white">
        {children}
      </body>
    </html>
  );
}
