import Footer from './components/Footer';
import Header from './components/header/Header'
import './globals.css'
import { Source_Sans_Pro} from 'next/font/google'


const sourceSansPro = Source_Sans_Pro({
  weight: ["200", "300", "400", "600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: 'Solar Solutions - by Choudhary Engineering',
  description: 'Provider of solar solutions in Nagpur',
}

export default function RootLayout({ children }) {
 

  return (
    <>
    
    <html lang="en">
     
      <body className={sourceSansPro.className}>

       <main  className="max-w-[1440px] relative mx-auto">
        <Header/>
        {children}
        <Footer/>
        </main>

        <div id='myportal'/>
        </body>

    </html>
    </>

  )
}
