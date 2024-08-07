import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ReduxProvider from '@/redux/provider';
import SideBar from '@/components/SideBar';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Welcome to Zenica Healthcare | Quality Of Life Is Our Mission',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <ReduxProvider>
            <div>
              <SideBar />
            </div>
            <div>
              <Navbar />
            </div>
            <div className="mt-4 mb-4">
              {children}
            </div>
            <div>
              <Footer />
              <br />
              <p className="text-xs px-8 md:px-20">© 2023 Zenica Healthcare</p>
            </div>
          </ReduxProvider>
        </div>
      </body>
    </html>
  );
}
