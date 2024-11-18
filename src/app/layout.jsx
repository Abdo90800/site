import "./globals.css";
// import HeaderSection from "@/componen/Organisms/HeaderSection";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children} </body>
    </html>
  );
}
