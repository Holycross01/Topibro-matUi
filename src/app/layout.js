// app/layout.jsx
import Footer from "@/components/Footer";
import "./globals.css";
import NavBar from "@/components/Navbar";

export const metadata = {
  title: "MUI + Next App",
  description: "Starter",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main style={{ paddingTop: "80px" }}>{children}</main>
        <Footer/>

      </body>
    </html>
  );
}
