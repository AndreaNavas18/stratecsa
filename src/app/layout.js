import { Inter } from "next/font/google";
import "./globals.css";
import Header from '../app/components/header/header';
import Header2 from './components/header2/header2';
import Footer1 from './components/footer/footer1';
import '@fortawesome/fontawesome-svg-core/styles.css';
import TawkTo from "./tawkto/tawkto";
import { GoogleTagManager } from '@next/third-parties/google'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Stratecsa",
  description: "Desarrollado por Stratecsa 2024",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <GoogleTagManager gtmId="TVZ5B95" />
    <head>
    {/* <script id="chatway" async={true} src="https://cdn.chatway.app/widget.js?id=evTLAzR0Ancg"></script>
    <script id="pixel-chaty" async={true} src="https://cdn.chaty.app/pixel.js?id=unBeUuC3"></script> */}
    <link rel='icon' href='/logo-11.ico'/>
    </head>
      <body className={inter.className}>
        <Header/>
        <Header2/>
        <TawkTo/>
          {children}
        <Footer1/>
      </body>
    </html>
  );
}
