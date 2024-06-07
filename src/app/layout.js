import Cabecalho from "./components/Cabecalho.js";
import Rodape from "./components/Rodape.js"
export const metadata = {
  title: "Meu Shop.com",
  description: "E-commerce",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Cabecalho />

        {children}
        <Rodape />
      </body>
    </html>
  );
}
