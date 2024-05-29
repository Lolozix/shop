import Cabecalho from "./components/Cabecalho.js";

export const metadata = {
  title: "Meu Shop.com",
  description: "E-commerce",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Cabecalho/>
        {children}
      
      </body>
    </html>
  );
}
