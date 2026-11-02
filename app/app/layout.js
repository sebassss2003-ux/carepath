import "./globals.css";

export const metadata = {
  title: "CarePath+",
  description: "Organiza tus siguientes pasos después de recibir un resultado médico.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
