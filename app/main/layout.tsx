import Navbar from '../components/Navbar/index';
import Footer from '../components/Footer/index';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <>
        <Navbar />
        {children}
        {/* <Footer /> */}
      </>
  )
}
