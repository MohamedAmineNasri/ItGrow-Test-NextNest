import Header from '../components/ui/Header'
import Footer from '../components/ui/footer'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
    <Header />
    <div className="flex-grow">
      {/* Main content goes here */}
    </div>
    <Footer />
  </div>
  );
}
